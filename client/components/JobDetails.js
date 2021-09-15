import React, { useState } from 'react';
import axios from 'axios';

const JobDetails = (props) => {
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
    <div className='jobdetails'>
      <form>
        {(logo) ? <img className="modallogo" src='https://logo.clearbit.com/google.com?size=200'></img> : <p></p>}
        <br/>
        <div className="form__group field">
          <label for="name" className="form__label">Name</label>
          <input type="input" className="form__field" placeholder="Name" name="name" id='name' required />
        </div>
        <br/>
        <div>Title: {props.title}</div>
        <div>Stage: {props.stage}</div>
        <div>Salary: {props.salary}</div>
        <br/>
        <div>Notes: {props.notes.slice(0, 140)}</div>
      </form>
    </div>
  );
};

export default JobDetails;
