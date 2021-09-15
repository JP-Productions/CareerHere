import { combineReducers } from 'redux';

import userReducer from './userReducer';
import jobReducer from './jobReducer';

const reducers = combineReducers({
  user: userReducer,
  job: jobReducer,
});

export default reducers;
