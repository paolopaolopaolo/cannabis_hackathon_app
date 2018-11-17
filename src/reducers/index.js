import { combineReducers } from 'redux';
import UserReducer from './user.reducer';


const cannabisApp = combineReducers({
  user: UserReducer,
});

export default cannabisApp;
