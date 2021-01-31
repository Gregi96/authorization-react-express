const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

const withAuth = require('./middlewares/middleware');

const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const api = require('./routes/api');

const mongoose = require('mongoose');

const mongo_url = 'mongodb://localhost:27017/react-auth';

mongoose.connect(
  mongo_url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      throw err;
    } else {
      console.log(`Successfully connected to ${mongo_url}`);
    }
  }
);

app.use('/api', api);

app.get('/checkToken', withAuth, function (req, res) {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
