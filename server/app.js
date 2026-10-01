import { createServer } from 'node:http';

const MAX_BODY_BYTES = 16 * 1024;
const MAX_REQUESTS_PER_MINUTE = 30;

function sendJson(res, status, body) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  res.end(JSON.stringify(body));
}

export function validateContact(data) {
  if (!data || typeof data !== 'object' || Array.isArray(data)) return null;

  const name = typeof data.name === 'string' ? data.name.trim().replace(/\s+/g, ' ') : '';
  const email = typeof data.email === 'string' ? data.email.trim() : '';
  const phone = typeof data.phone === 'string' ? data.phone.trim() : '';
  const message = typeof data.message === 'string' ? data.message.trim() : '';

  if (!name || name.length > 120 || [...name].some((char) => {
    const code = char.codePointAt(0);
    return code < 32 || code === 127;
  })) return null;
  if (email.length > 254 || !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email)) return null;
  if (phone && (phone.length > 30 || !/^\+?[0-9\s()-]{10,30}$/.test(phone))) return null;
  if (!message || message.length > 5000 || message.includes('\0')) return null;
  if (data.agreement !== true) return null;

  return { name, email, phone, message };
}

async function readJson(req) {
  if (!req.headers['content-type']?.toLowerCase().startsWith('application/json')) {
    throw new Error('invalid_content_type');
  }
  if (Number(req.headers['content-length']) > MAX_BODY_BYTES) {
    throw new Error('body_too_large');
  }

  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > MAX_BODY_BYTES) throw new Error('body_too_large');
    chunks.push(chunk);
  }

  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    throw new Error('invalid_json');
  }
}

export function createContactServer({ sendMail, now = Date.now }) {
  let windowStart = now();
  let requestsThisMinute = 0;

  return createServer(async (req, res) => {
    const pathname = new URL(req.url, 'http://localhost').pathname;

    if (pathname === '/health' && req.method === 'GET') {
      sendJson(res, 200, { ok: true });
      return;
    }
    if (pathname !== '/api/contact') {
      sendJson(res, 404, { error: 'not_found' });
      return;
    }
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      sendJson(res, 405, { error: 'method_not_allowed' });
      return;
    }

    const currentTime = now();
    if (currentTime - windowStart >= 60_000) {
      windowStart = currentTime;
      requestsThisMinute = 0;
    }
    if (++requestsThisMinute > MAX_REQUESTS_PER_MINUTE) {
      sendJson(res, 429, { error: 'rate_limited' });
      return;
    }

    try {
      const data = validateContact(await readJson(req));
      if (!data) {
        sendJson(res, 400, { error: 'invalid_data' });
        return;
      }

      await sendMail(data);
      sendJson(res, 200, { ok: true });
    } catch (error) {
      if (error.message === 'body_too_large') {
        sendJson(res, 413, { error: 'body_too_large' });
      } else if (error.message === 'invalid_json' || error.message === 'invalid_content_type') {
        sendJson(res, 400, { error: 'invalid_request' });
      } else {
        console.error('Contact delivery failed:', error.code || 'smtp_error');
        sendJson(res, 502, { error: 'delivery_failed' });
      }
    }
  });
}
