import React, { useState } from 'react';
import JobModal from './JobModal.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Dashboard = (props) => {

  return (
    <div id='dashboard'>
        <div id='dashboardtop'>
            <div>
                Day Timer
            </div>
            <div>
                Motivational Quote
            </div>
            <button id="addjob">Add Job</button>
        </div>
    </div>
  );
};

export default Dashboard;
