import {combineReducers} from 'redux';
import user from './user';
import auth from './auth';
import packages from './packages';
import transaction from './transaction';
import guides from './guides';
const reducers = combineReducers({
  user,
  auth,
  transaction,
  packages,
  guides,

});
export default reducers;
