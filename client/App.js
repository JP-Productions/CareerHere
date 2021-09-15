import React, { Component } from 'react';
import Landing from './components/Landing';
import JobDetails from './components/JobDetails.js';
import JobModal from './components/JobModal';
import Dashboard from './components/Dashboard.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import * as types from './constants/actionTypes';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     // this.state = {
//     //   loggedIn: false,
//     // }
//     this.responseGoogle = this.responseGoogle.bind(this);
//   }
const App = (props) => {
  const loggedIn = useSelector((state)=>state.user.loggedIn)
  const dispatch = useDispatch();
  function responseGoogle (response) {
    axios.post('/auth/google', {
      firstName: response.Rs.mU,
      lastName: response.Rs.mS,
      email: response.Rs.Ct,
      token: response.Rs.$I,
    })
    .then((res) => {
      dispatch({
        type: types.USER_LOGGED_IN,
        payload: {
          firstName: response.Rs.mU,
          lastName: response.Rs.mS,
          createdAt: res.data.createdAt,
          id: res.data.id,
          jobs: res.data.jobs
        } 
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  const jobs = useSelector((state)=>state.user.jobs);
 
    return (
      <div>
        <Router>
          <div id='navbar'>
            <div id='leftbuttons'>
              <GoogleLogin
                clientId='351358931211-av32gv56l0qja9hrs47hi1va0j3uv4as.apps.googleusercontent.com'
                render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Login</button>
                )}  
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
              {loggedIn ? (
                <Link to="/dashboard">
                  <button>Dashboard</button>
                </Link> 
                ) : (
                  <GoogleLogin
                    clientId='351358931211-av32gv56l0qja9hrs47hi1va0j3uv4as.apps.googleusercontent.com'
                    render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign Up</button>
                    )}  
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                  />
                )
              }
            </div>
            <Link to="/">
            <img id="logo" src="../Crown_Vintage_Logo_no_Scroll.png"/>
            </Link>
            <div id='rightbuttons'>
              <Link to="/demo">
              <button onClick={()=>console.log(jobs)}>Demo</button>
              </Link>
              <Link to="/team">
              <button>Team</button>
              </Link>
            </div>
          </div>

          <Switch>
            <Route exact path="/">
              <Landing responseGoogle={responseGoogle}/>
            </Route>
            <Route exact path="/dashboard">
              {loggedIn ? (
                <Dashboard />
                ) : <Redirect to="/"></Redirect>
              }
            </Route>
          </Switch>
        </Router>
      </div>
    )
}

export default App;
