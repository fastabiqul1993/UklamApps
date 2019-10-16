import {combineReducers} from 'redux';
import user from './user';
import auth from './auth';
import transaction from './transaction';
const reducers = combineReducers({
  user,
  auth,
  transaction,
});

export default reducers;
