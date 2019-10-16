import {combineReducers} from 'redux';
import user from './user';
import auth from './auth';
import packages from './packages';

const reducers = combineReducers({
  user,
  auth,
  packages,
});

export default reducers;
