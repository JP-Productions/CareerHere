import React, { useState } from 'react';
import axios from 'axios';

const JobDetails = (props) => {
  // let logo = true;
  // // axios.get(`https://logo.clearbit.com/${props.company_name}.com`)
  // axios.get(`https://logo.clearbit.com/google.com`)
  // .then(function (response) {
  //   logo = true;
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [stage, setStage] = useState('');
  const [location, setLocation] = useState('');
  const [offer, setOffer] = useState('');
  const [lastContact, setLastContact] = useState('');
  const [offerDate, setOfferDate] = useState('');
  const [offerDeadline, setOfferDeadline] = useState('');
  const [pros, setPros] = useState('');
  const [cons, setCons] = useState('');
  const [cultureNotes, setCultureNotes] = useState('');
  const [misc, setMisc] = useState('');
  
  return (
    <div id='jobdetails'>
      <form id='jobForm'>
        <div className='header'>
          <input placeholder='Company Name' type='text' value={company} onChange={(e)=>setCompany(e.target.value)}/>
          <input placeholder='Title' type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </div>

        <div className='columnsContainer'>
         <div className='column'>
            <input className='textField' placeholder='Stage' type='text' value={stage} onChange={(e)=>setStage(e.target.value)}/>
            <input className='textField' placeholder='Location' type='text' value={location} onChange={(e)=>setLocation(e.target.value)}/>
            <input className='textField' placeholder='Offer' type='text' value={offer} onChange={(e)=>setOffer(e.target.value)}/>
         </div>
         <div className='column'>
            <input className='dateField' placeholder='Last Contact' type='text' value={lastContact} onChange={(e)=>setLastContact(e.target.value)}/>
            <input className='dateField' placeholder='Offer Date' type='text' value={offerDate} onChange={(e)=>setOfferDate(e.target.value)}/>
            <input className='dateField' placeholder='Offer Deadline' type='text' value={offerDeadline} onChange={(e)=>setOfferDeadline(e.target.value)}/>
         </div>
        </div>
        
        <div className='blurbContainer'>
          
          <input placeholder='Pros' className='blurb' type='text' value={pros} onChange={(e)=>setPros(e.target.value)}/>
          <input placeholder='Cons' className='blurb' type='text' value={cons} onChange={(e)=>setCons(e.target.value)}/>
          <input placeholder='Culture Notes' className='blurb' type='text' value={cultureNotes} onChange={(e)=>setCultureNotes(e.target.value)} />
          <input placeholder='Misc.' className='blurb' type='text' value={misc} onChange={(e)=>setMisc(e.target.value)} />
          
        </div>
        <div>
          <button id='add'>Add</button>
          <button id="cancel">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default JobDetails;
