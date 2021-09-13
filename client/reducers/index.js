import { combineReducers } from 'redux';

import userReducer from './userReducer';
import messageReducer from './messageReducer';

const reducers = combineReducers({
  user: userReducer,
  message: messageReducer,
});

export default reducers;
