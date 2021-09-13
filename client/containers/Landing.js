import React, { useState } from 'react';
import NavBar from './NavBar.js';


const Landing = (props) => {
  return (
    <div id='landing'>
      <NavBar/>
      <div className='landing_content'>  
        <div className="product_Description">
          <p className='intro_phrase'>Searching for your next <span className="bold">career</span>? You'll find it here at <span className="bold">CareerHere</span>.</p>
          Track all jobs of interest, where you are in the application process, and most importantly, notes about the company and team's culture and how that aligns with your values.  A career is more than a paycheck.  Make your next endeavor a career.
          {/* fill in with hard coded description */}
        </div>
        <button className='get_started'>Get Started!</button>
         <img id='main_gif' src="../getstarted.gif" /> 
      </div>
      
          
    </div>
  );
};

export default Landing;
