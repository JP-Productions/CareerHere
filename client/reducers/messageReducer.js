// import action types
import * as types from '../constants/actionTypes';

const initialState = {
  message: '',
  id: '',
  editMode: false,
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SWITCHED_TO_EDIT:
      return {
        ...state,
        message: action.payload.message,
        id: action.payload.id,
        editMode: true,
      };
    case types.EDIT_MADE:
      return {
        ...state,
        message: '',
        id: '',
        editMode: false,
      };
    default: {
      return state;
    }
  }
};

export default messageReducer;
