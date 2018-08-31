const express = require('express');
const api = require('./api/');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(+ '/api', api);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
module.exports = app;
