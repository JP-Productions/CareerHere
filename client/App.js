import React, { Component } from 'react';
import Landing from './components/Landing';
import JobDetails from './components/JobDetails.js';
import JobModal from './components/JobModal';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    }
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  responseGoogle(response) {
    console.log("Google response: ", response.Rs.$I);
    
    axios.post('/auth/google', {
      firstName: response.Rs.mU,
      lastName: response.Rs.mS,
      email: response.Rs.Ct,
      token: response.Rs.$I,
    })
    .then((response) => {
      this.setState((state) => {
        return {...state, loggedIn: true}})
        console.log('STATE', this.state)
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  render() {
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
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
              {this.state.loggedIn ? (
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
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
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
              <button>Demo</button>
              </Link>
              <Link to="/team">
              <button>Team</button>
              </Link>
            </div>
          </div>

          <Switch>
            <Route exact path="/">
              <Landing responseGoogle={this.responseGoogle}/>
            </Route>
            <Route exact path="/dashboard">
              {this.state.loggedIn ? (
                <JobModal company_name='Amazon' title='Software Engineer 2' stage='Applied' salary='$140k-170k' notes=''/>
                ) : <Redirect to="/"></Redirect>
              }
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
