import { combineReducers } from 'redux';
import UserReducer from './user.reducer';
import ProductReducer from './product.reducer';


const cannabisApp = combineReducers({
  user: UserReducer,
  products: ProductReducer,
});

export default cannabisApp;
