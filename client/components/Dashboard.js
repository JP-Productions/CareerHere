import React, { useState } from 'react';
import JobModal from './JobModal.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

const Dashboard = (props) => {
  // const dispatch = useDispatch();
  const jobs = useSelector(state => state.user.jobs);
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
        <div id="dashboardbottom">
            {jobs.map((el) => {
                return <JobModal company_name={el.cons} title={el.title} stage={el.stage} salary={el.offer_salary} notes={el.misc}/>
            })}
        </div>
    </div>
  );
};

export default Dashboard;
