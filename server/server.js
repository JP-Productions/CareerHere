const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const userController = require('./controllers/userController');
const messagesController = require('./controllers/messagesController');
const cookieController = require('./controllers/cookieController');
const sessionController = require('./controllers/sessionController');

const app = express();

const PORT = 3000;

const mongoURI =
  process.env.NODE_ENV === 'production'
    ? 'mongodb://127.0.0.1:27017/chatRoomProd'
    : 'mongodb://127.0.0.1:27017/chatRoomDev';
mongoose.connect(mongoURI, { useNewUrlParser: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('Database connected:', mongoURI);
});

db.on('error', (err) => {
  console.error('connection error:', err);
});
app.use(cookieParser());
app.use(express.json());
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '..', '/client/')));
app.post(
  '/login',
  userController.verifyUser,
  cookieController.setSSIDCookie,
  sessionController.createSession,
  (req, res) => {
    return res.status(200).json(res.locals.user);
  }
);
app.get('/message', messagesController.getMessages, (req, res) => {
  return res.status(200).json(res.locals.messages);
});
app.post(
  '/message',
  sessionController.verifySession,
  sessionController.updateSession,
  messagesController.postMessage,
  (req, res) => {
    return res.status(200).json(res.locals.message);
  }
);
app.delete(
  '/message',
  sessionController.verifySession,
  sessionController.updateSession,
  messagesController.deleteMessage,
  (req, res) => {
    return res.status(200).send();
  }
);
app.put(
  '/message',
  sessionController.verifySession,
  sessionController.updateSession,
  messagesController.updateMessage,
  (req, res) => {
    return res.status(200).json(res.locals.message);
  }
);
app.put(
  '/check',
  sessionController.verifySession,
  userController.findUserBySSID,
  sessionController.updateSession,
  (req, res) => res.status(200).json(res.locals.user)
);
app.post(
  '/register',
  userController.createUser,
  cookieController.setSSIDCookie,
  sessionController.createSession,
  (req, res) => {
    return res.status(200).json(res.locals.user);
  }
);

app.delete(
  '/logout',
  sessionController.endSession,
  cookieController.clearSSIDCookie,
  (req, res) => {
    return res.status(200).json({ loggedOut: true });
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
