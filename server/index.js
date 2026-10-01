import nodemailer from 'nodemailer';
import { createContactServer } from './app.js';

const host = process.env.HOST || '127.0.0.1';
const port = Number(process.env.PORT || 18080);
const mailTo = process.env.MAIL_TO || 'info@pko-aword.ru';
const mailFrom = process.env.MAIL_FROM || 'noreply@pko-aword.ru';

const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST || '127.0.0.1',
  port: Number(process.env.SMTP_PORT || 25),
  secure: false,
  ignoreTLS: true,
  connectionTimeout: 5000,
  greetingTimeout: 5000,
  socketTimeout: 10000,
});

const server = createContactServer({
  sendMail: ({ name, email, phone, message }) => transport.sendMail({
    from: mailFrom,
    to: mailTo,
    replyTo: email,
    subject: 'Новое обращение с сайта ПКО Аворд',
    text: [
      `Имя: ${name}`,
      `Email: ${email}`,
      `Телефон: ${phone || 'Не указан'}`,
      '',
      'Сообщение:',
      message,
    ].join('\n'),
  }),
});

server.requestTimeout = 15_000;
server.listen(port, host, () => {
  console.info(`Contact API listening on ${host}:${port}`);
});
