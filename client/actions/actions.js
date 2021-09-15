// import action types
import * as types from '../constants/actionTypes';

export const userLoggedInCreator = (firstName, lastName, createdAt, jobs) => ({
  type: types.USER_LOGGED_IN,
  payload: {firstName: firstName, lastName: lastName, createdAt: createdAt, jobs: jobs},
});



export const userLoggedOut = () => ({
  type: types.USER_LOGGED_OUT,
});

export const switchedToEdit = (job, id) => ({
  type: types.SWITCHED_TO_EDIT,
  payload: { ...job, id: id },
});

export const editMade = () => ({
  type: types.EDIT_MADE,
});
