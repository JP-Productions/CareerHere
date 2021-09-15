import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import JobModal from './JobModal.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const Landing = ({responseGoogle}) => {

  return (
    <div id='landing'>
      <div className='landing_content'>  
        <div className="product_Description">
          <p className='intro_phrase'>Searching for your next <span className="bold">career</span>? You'll find it here at <span className="bold">CareerHere</span>.</p>
          Track all jobs of interest, where you are in the application process, and most importantly, notes about the company and team's culture and how that aligns with your values.  A career is more than a paycheck.  Make your next endeavor a career.
          {/* fill in with hard coded description */}
        </div>
          
            <GoogleLogin
              clientId='351358931211-av32gv56l0qja9hrs47hi1va0j3uv4as.apps.googleusercontent.com'
              render={renderProps => (
                <Link to="/dashboard">
                  <button onClick={renderProps.onClick} className='get_started' disabled={renderProps.disabled}>Get Started</button>
                </Link>
              )}  
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
         {/* <img id='main_gif' src="../getstarted.gif" />  */}
      </div>
    </div>
  );
};

export default Landing;
