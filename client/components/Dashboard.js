import React, { useState } from 'react';
import JobModal from './JobModal.js';
import JobDetails from './JobDetails.js';
import date from 'date-and-time';
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
  const firstName = useSelector(state => state.user.firstName);

  return (
    <div id='dashboard'>
        <div id="dashboardbreak"></div>
        <div id="dashboardbottom">
            {jobs.map((el) => {
                return <JobModal company_name={el.cons} jobObj={el} title={el.title} stage={el.stage} salary={el.offer_salary} notes={el.misc}/>
            })}
            {/* <JobModal company_name='PayPal' title='Chief Meme Officer' stage='In the fucking bag' salary='all the booty' notes='I dont do anything all day but watch the transactions come in and round it down in our systems and divert the remaining fractions of a cent to my account and keep my head down' />
            <JobModal company_name='Amazon' title='Chief Meme Officer' stage='In the fucking bag' salary='all the booty' notes='' />
            <JobModal company_name='Google' title='Chief Meme Officer' stage='In the fucking bag' salary='all the booty' notes='' />
            <JobModal company_name='Facebook' title='Chief Meme Officer' stage='In the fucking bag' salary='all the booty' notes='' />
            <JobModal company_name='Netflix' title='Chief Meme Officer' stage='In the fucking bag' salary='all the booty' notes='I work very hard and earn my fill for this wonderful org.' />
            <JobModal company_name='Twitter' title='Chief Meme Officer' stage='In the fucking bag' salary='all the booty' notes='' />
            <JobModal company_name='Walmart' title='Chief Meme Officer' stage='In the fucking bag' salary='all the booty' notes='' />
         */}
        </div>
    </div>
  );
};

export default Dashboard;
