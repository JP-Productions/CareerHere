import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import * as types from '../constants/actionTypes';

const JobModal = (props) => {
  const dispatch = useDispatch(); 
  // let logo = true;
  // axios.get(`https://logo.clearbit.com/${props.company_name}.com`)
  // // axios.get(`https://logo.clearbit.com/google.com`)
  // .then(function (response) {
  //   console.log("RESPONSE STATUS", response.status);
  //   logo = true;
  // })
  // .catch(function (error) {
  //   logo = false;
  //   console.log(error);
  // });
  
  // SWITCHED_TO_EDIT
  return (
    <button onClick={() => {dispatch({type: types.SWITCHED_TO_EDIT, payload: props.jobObj})}} className='jobmodal' key={props.jobObj.id || Math.round(Math.random()*1000)}>
      {<img className="modallogo" src={`https://logo.clearbit.com/${props.company_name}.com?size=200`} onError={(e)=>e.target.style.display='none'}></img>}
      <div className="modaltext">
        <div><span className="bold">Company Name: </span>{props.company_name}</div>
        <div><span className="bold">Title: </span>{props.title}</div>
        <div><span className="bold">Stage: </span>{props.stage}</div>
        <div><span className="bold">Salary: </span>{props.salary}</div>
        <br/>
        <div><span className="bold">Notes: </span>{props.notes.slice(0, 140)}</div>
      </div>

    </button>
  );
};

export default JobModal;
