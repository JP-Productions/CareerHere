// import action types
import * as types from '../constants/actionTypes';

const initialState = {
  firstName: '',
  lastName: '',
  createdAt: 0,
  jobs: [],
  id: 0,
  loggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_LOGGED_IN:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        createdAt: action.payload.createdAt,
        id: action.payload.id,
        loggedIn: true,
        jobs: action.payload.jobs,
      };
    case types.USER_LOGGED_OUT:
      return {
        ...state,
        firstName: '',
        lastName: '',
        createdAt: 0,
        jobs: [],
        loggedIn: false,
      };
    default: {
      return state;
    }
  }
};

export default userReducer;
