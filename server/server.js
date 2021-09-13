const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

const PORT = 3000;

app.use(cookieParser());
app.use(express.json());
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '..', '/client/')));
app.post(
  '/login',
  (req, res) => {
    return res.status(200).json('hi mom');
  }
);
app.get('/message', (req, res) => {
  return res.status(200).json('message');
});
app.post(
  '/message',
  (req, res) => {
    return res.status(200).json('msg');
  }
);
app.delete(
  '/message',
  (req, res) => {
    return res.status(200).send('hi');
  }
);
app.put(
  '/message',
  (req, res) => {
    return res.status(200).json('hello');
  }
);
app.put(
  '/check',
  (req, res) => res.status(200).json('hi')
);
app.post(
  '/register',
  (req, res) => {
    return res.status(200).json('hi');
  }
);

app.delete(
  '/logout',
  (req, res) => {
    return res.status(200).json('1');
  }
);

app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '..', '/client/index.html'));
});

app.use('*', (req, res) => {
  res.sendStatus(404);
});

app.use(function (err, req, res, next) {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
