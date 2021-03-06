const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hi from Softup!');
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy'
  });
});

app.listen(5000, err => {
  console.log('Listening');
});
