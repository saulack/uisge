import { combineReducers } from 'redux';
import  usersReducer  from './users_reducer';
import drinksReducer from './drinks_reducer';
import regionsReducer from  './region_reducer';

export default combineReducers({
  users: usersReducer,
  drinks: drinksReucer,
  regions: regionsReducer
});
