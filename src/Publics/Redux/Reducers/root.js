import {combineReducers} from 'redux';
import user from './user';
import auth from './auth';
import packages from './packages';
import transaction from './transaction';
const reducers = combineReducers({
  user,
  auth,
  transaction,
  packages,

export default reducers;
