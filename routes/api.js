const express = require('express');
const apiRouter = express.Router();
const User = require('./../models/User');

const secret = 'asdasdasdasdascweviy';
const jwt = require('jsonwebtoken');

const withAuth = require('./../middlewares/middleware');

apiRouter.post('/register', (req, res) => {
  const { email, password } = req.body;
  const user = new User({ email, password });
  user.save((err) => {
    if (err) {
      res.status(500).send('Error registering new user pleace try again');
    } else {
      res.status(200).send('Welcome to the club!');
    }
  });
});

apiRouter.get('/home', (req, res) => {
  res.send('Welcome!');
});

apiRouter.get('/secret', withAuth, (req, res) => {
  res.send('The password is potato');
});

apiRouter.post('/authenticate', function (req, res) {
  const { email, password } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err) {
      res.status(500).json({ error: 'Internal error pleace try again' });
    } else if (!user) {
      res.status(401).json({ error: 'Incorrect email or password' });
    } else {
      user.isCorrectPassword(password, function (err, same) {
        if (err) {
          res.status(500).json({
            error: 'Internal error pleace try again',
          });
        } else if (!same) {
          res.status(401).json({
            error: 'Incorrect email or password',
          });
        } else {
          //Issue token
          const payload = { email };
          const token = jwt.sign(payload, secret, { expiresIn: '1h' });
          res.cookie('token', token, { httpOnly: true }).sendStatus(200);
        }
      });
    }
  });
});

apiRouter.post('/logout', function (req, res) {
  res
    .cookie('token', 'none', { expires: new Date(), httpOnly: true })
    .sendStatus(200);
});

module.exports = apiRouter;
