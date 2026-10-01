import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { createContactServer } from './app.js';

const validContact = {
  name: 'Иван Петров',
  email: 'ivan@example.com',
  phone: '+7 999 123 45 67',
  message: 'Прошу связаться со мной.',
  agreement: true,
};

let server;
let baseUrl;
const delivered = [];

before(async () => {
  server = createContactServer({
    sendMail: async (message) => delivered.push(message),
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
  await new Promise((resolve) => server.close(resolve));
});

test('valid contact reaches the mail adapter', async () => {
  const response = await fetch(`${baseUrl}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(validContact),
  });

  assert.equal(response.status, 200);
  assert.equal(delivered.length, 1);
  assert.deepEqual(delivered[0], {
    name: validContact.name,
    email: validContact.email,
    phone: validContact.phone,
    message: validContact.message,
  });
});

test('invalid consent and message are rejected before delivery', async () => {
  const response = await fetch(`${baseUrl}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...validContact, message: '', agreement: false }),
  });

  assert.equal(response.status, 400);
  assert.equal(delivered.length, 1);
});

test('oversized requests are rejected before delivery', async () => {
  const response = await fetch(`${baseUrl}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...validContact, message: 'x'.repeat(20_000) }),
  });

  assert.equal(response.status, 413);
  assert.equal(delivered.length, 1);
});

test('SMTP failure is reported to the form', async () => {
  const failingServer = createContactServer({
    sendMail: async () => { throw new Error('SMTP unavailable'); },
  });
  await new Promise((resolve) => failingServer.listen(0, '127.0.0.1', resolve));
  try {
    const response = await fetch(`http://127.0.0.1:${failingServer.address().port}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(validContact),
    });
    assert.equal(response.status, 502);
    assert.equal((await response.json()).error, 'delivery_failed');
  } finally {
    await new Promise((resolve) => failingServer.close(resolve));
  }
});
