const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const DBcontroller = require('./controllers/DBcontrollers.js');
const Authcontrollers = require('./controllers/Authcontrollers.js')

const app = express();

const PORT = 3000;

app.use(cookieParser());
app.use(express.json());
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '..', '/client/')));



app.post('/auth/google', DBcontroller.verifyUser, Authcontrollers.setCookie, DBcontroller.getAllUserApps, (req, res) => {
  console.log('Req Body: ', req.body);
  return res.json({id:res.locals.id, createdAt: res.locals.createdAt, jobs: res.locals.apps });
  //need controllers to check if user exists, if not add them to DB, store their token in the users table as well
  //check if logged in controller that grabs last token for user from DB, and checks if they have that in the cookies attached to their request
    //update token in users table if changed
  //on all other requests look for the correct cookie, if they don't have it, redirect to the homepage with a prompt to sign in
  //two controllers:
    //signInUpAndAddCookie
    //checkCookie
  //use email as unique user identifier
});

app.delete('/job', DBcontroller.deleteUserApps, DBcontroller.getAllUserApps, (req,res)=>{
  return res.status(200).json(res.locals.apps);
});
app.get('/job', DBcontroller.getAllUserApps, (req,res)=>{
  return res.status(200).json(res.locals.apps);
});

app.post('/job', DBcontroller.postUserApps, DBcontroller.getAllUserApps, (req,res)=>{
  return res.status(200).json(res.locals.apps);
});

app.put('/job', DBcontroller.updateUserApps, DBcontroller.getAllUserApps, (req, res) => {
  return res.status(200).json(res.locals.apps);
})

app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '..', '/client/index.html'));
});

app.get('/*', function (req, res) {
  res.redirect('/');
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
