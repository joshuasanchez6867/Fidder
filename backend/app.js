const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const PORT = 3000;
app.listen(PORT, () => {
  console.log('The server is running, you better catch it!');
});
