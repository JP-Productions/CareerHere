// import action types
import * as types from '../constants/actionTypes';

const initialState = {
  title: '',
  stage: 0, 
  offer_date: '', 
  offer_salary: '',
  offer_deadline: '', 
  last_contact: '',
  culture_notes: '', 
  location: '', 
  pros: '', 
  cons: '', 
  misc: '',
  id: 0,
  editMode: false,
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SWITCHED_TO_EDIT:
      return {
        ...state,
        title: action.payload.title,
        stage: action.payload.stage, 
        offer_date: action.payload.offer_date, 
        offer_salary: action.payload.offer_salary,
        offer_deadline: action.payload.offer_deadline, 
        last_contact: action.payload.last_contact,
        culture_notes: action.payload.culture_notes, 
        location: action.payload.location, 
        pros: action.payload.pros, 
        cons: action.payload.cons, 
        misc: action.payload.misc,
        id: action.payload.id,
        editMode: true,
      };
    case types.EDIT_MADE:
      return {
        ...state,
        title: '',
        stage: 0, 
        offer_date: '', 
        offer_salary: '',
        offer_deadline: '', 
        last_contact: '',
        culture_notes: '', 
        location: '', 
        pros: '', 
        cons: '', 
        misc: '',
        id: 0,
        editMode: false,
      };
    default: {
      return state;
    }
  }
};

export default jobReducer;
