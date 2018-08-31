const express = require('express');
const api = require('./api/');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;

const virtualDirPath = process.env.virtualDirPath || '';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(virtualDirPath, express.static(path.join(__dirname, 'dist')));
app.use(virtualDirPath + '/api', api);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
module.exports = app;
