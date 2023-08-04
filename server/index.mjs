import express from 'express';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

const BASE_DIR = path.join(__dirname, 'src');
console.log({ BASE_DIR });
const HTML_DIR = path.join(BASE_DIR, 'html');
const port = 3033;

//console.log({ BASE_DIR, HTML_DIR });

const router = express.Router();

app.use((_, res, next) => {
  let now = new Date();
  console.log('Time: ', now.toUTCString());
  next();
});

router.get('/', (_, res) => {
  res.sendFile(`${HTML_DIR}/index.html`);
});

router.get('/index', (_, res) => {
  res.sendFile(`${HTML_DIR}/index.html`);
});

router.get('/typing', (_, res) => {
  console.log('typing....');
  res.sendFile(`${HTML_DIR}/typing.html`);
});

router.get('/reader', (_, res) => {
  res.sendFile(`${HTML_DIR}/reader.html`);
});

router.get('/panel', (_, res) => {
  res.sendFile(`${HTML_DIR}/panel.html`);
});

router.get('/hindi', (_, res) => {
  res.sendFile(`${HTML_DIR}/hindi.html`);
});

router.get('/tree', (_, res) => {
  res.sendFile(`${HTML_DIR}/tree.html`);
});

router.get('/record', (_, res) => {
  console.log('Accessing the record section…');
  res.sendFile(`${HTML_DIR}/record.html`);
});

router.get('/color', (_, res) => {
  res.sendFile(`${HTML_DIR}/color.html`);
});

// error handling middleware

app.use((err, req, res, next) => {
  console.error(err && err.stack);
  res.status(500).send('Something broke!');
  next();
});

app.use('/', express.static(BASE_DIR));

app.use('/', router);

app.listen(port, () => {
  console.log(' listening port ' + port);
});
