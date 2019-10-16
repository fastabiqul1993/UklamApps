import {combineReducers} from 'redux';
import user from './user';
import auth from './auth';

const reducers = combineReducers({
  user,
  auth,
});

export default reducers;
