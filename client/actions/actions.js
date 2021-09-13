// import action types
import * as types from '../constants/actionTypes';

export const userLoggedInCreator = (username) => ({
  type: types.USER_LOGGED_IN,
  payload: username,
});

export const userLoggedOut = () => ({
  type: types.USER_LOGGED_OUT,
});

export const switchedToEdit = (message, id) => ({
  type: types.SWITCHED_TO_EDIT,
  payload: { message: message, id: id },
});

export const editMade = () => ({
  type: types.EDIT_MADE,
});
