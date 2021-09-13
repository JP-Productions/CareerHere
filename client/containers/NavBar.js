import React, { useState } from 'react';

const NavBar = (props) => {
  return (
    <div id='navbar'>
      
      <div id='leftbuttons'>
        <button>Sign Up</button>
        <button>Login</button>
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
