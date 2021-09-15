import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import * as types from '../constants/actionTypes';


const JobDetails = (props) => {
  
  const userId = useSelector((state)=>state.user.id);
  const editMode = useSelector((state)=>state.job.editMode);
  const dispatch = useDispatch();
  const jobId = useSelector(state=>state.job.id) 

  const companyRedux = useSelector(state=>state.job.company_name);
  const titleRedux = useSelector(state=>state.job.title);
  const stageRedux = useSelector(state=>state.job.stage);
  const locationRedux = useSelector(state=>state.job.location);
  const offerRedux = useSelector(state=>state.job.offer_salary);
  const lastContactRedux = useSelector(state=>state.job.last_contact);
  const offerDateRedux = useSelector(state=>state.job.offer_date);
  const offerDeadlineRedux = useSelector(state => state.job.offer_deadline);
  const prosRedux = useSelector(state => state.job.pros);
  const consRedux = useSelector(state => state.job.cons);
  const cultureNotesRedux = useSelector(state => state.job.culture_notes);
  const miscRedux = useSelector(state => state.job.misc);

  const [company, setCompany] = useState(companyRedux);
  const [title, setTitle] = useState(titleRedux);
  const [stage, setStage] = useState(stageRedux);
  const [location, setLocation] = useState(locationRedux);
  const [offer, setOffer] = useState(offerRedux);
  const [lastContact, setLastContact] = useState(lastContactRedux);
  const [offerDate, setOfferDate] = useState(offerDateRedux);
  const [offerDeadline, setOfferDeadline] = useState(offerDeadlineRedux);
  const [pros, setPros] = useState(prosRedux);
  const [cons, setCons] = useState(consRedux);
  const [cultureNotes, setCultureNotes] = useState(cultureNotesRedux)
  const [misc, setMisc] = useState(miscRedux);
  function addJob() {
    axios.post('/job', {
      user_id: userId,
      title: title,
      stage: stage,
      company_name: company,
      location: location,
      offer_salary: offer,
      offer_date: offerDate,
      last_contact: lastContact,
      offer_deadline: offerDeadline,
      pros: pros,
      cons: cons,
      culture_notes: cultureNotes,
      misc: misc,
    })
    .then((res) => {
     console.log(res);
     dispatch({
       type: types.GET_JOBS,
       payload: res.data
     })
     props.setAddingJob(false);

    })
    .catch(function (error) {
      console.log(error);
    });
  }

  function updateJob() {
    axios.put('/job', {
      user_id: userId,
      id: jobId,
      title: title,
      stage: stage,
      company_name: company,
      location: location,
      offer_salary: offer,
      offer_date: offerDate,
      last_contact: lastContact,
      offer_deadline: offerDeadline,
      pros: pros,
      cons: cons,
      culture_notes: cultureNotes,
      misc: misc,
    })
    .then((res) => {
     console.log(res);
     dispatch({
       type: types.GET_JOBS,
       payload: res.data
     })
     dispatch({ type: types.EDIT_MADE });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  function deleteJob() {
    console.log('userId prior to delete request', userId);
    console.log('jobid prior to delete', jobId);
    axios.delete('/job', {
      data: {
      user_id: userId,
      id: jobId,
      }
    })
    .then((res) => {
     console.log(res);
     dispatch({
       type: types.GET_JOBS,
       payload: res.data
     })
     dispatch({ type: types.EDIT_MADE });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  function cancel () {
    editMode ? dispatch({type: types.EDIT_MADE }): props.setAddingJob(false);
  }
  
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
          <button id='add' onClick={(e)=>{
            e.preventDefault();
            editMode ? updateJob() : addJob();
          }
          }>{editMode ? "Update" : "Add"}</button>
          <button id="cancel" onClick={()=>cancel()}>Cancel</button>
          {editMode ? <button onClick={(e)=> {
            e.preventDefault();
            deleteJob()
          }}>Delete</button> : null }
        </div>
      </form>
    </div>
  );
};

export default JobDetails;
