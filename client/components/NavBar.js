import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

const NavBar = (props) => {
  const responseGoogle = async (response) => {
    console.log("Google response: ", response.Rs.$I);
    
    axios.post('/auth/google', {
      firstName: response.Rs.mU,
      lastName: response.Rs.mS,
      email: response.Rs.Ct,
      token: response.Rs.$I,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };
  return (
    <div id='navbar'>
      
      <div id='leftbuttons'>
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
      </div>

      <img id="logo" src="../Crown_Vintage_Logo_no_Scroll.png"/>
      <div id='rightbuttons'>
        <button>Demo</button>
        <button>Team</button>
      </div>
      
    </div>
    
  );
};

export default NavBar;
