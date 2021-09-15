import React, { useState } from 'react';
import axios from 'axios';

const JobModal = (props) => {
  let logo = true;
  // axios.get(`https://logo.clearbit.com/${props.company_name}.com`)
  axios.get(`https://logo.clearbit.com/google.com`)
  .then(function (response) {
    logo = true;
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  return (
    <div className='jobmodal'>
      {(logo) ? <img className="modallogo" src='https://logo.clearbit.com/google.com?size=200'></img> : <p></p>}
      <div><span className="bold">Company Name: </span>{props.company_name}</div>
      <div><span className="bold">Title: </span>{props.title}</div>
      <div><span className="bold">Stage: </span>{props.stage}</div>
      <div><span className="bold">Salary: </span>{props.salary}</div>
      <br/>
      <div><span className="bold">Notes: </span>{props.notes.slice(0, 140)}</div>

    </div>
  );
};

export default JobModal;
