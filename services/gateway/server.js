require('dotenv').config();
const https = require('https');
const fs = require('fs');
const app = require('./src/app');

https
  .createServer(
    {
      key: fs.readFileSync('./encryption/key.pem'),
      cert: fs.readFileSync('./encryption/cert.pem'),
      passphrase: '8xK58u33WwxCBiW'
    },
    app
  )
  .listen(4000);
