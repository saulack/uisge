import { combineReducers } from 'redux';
import  usersReducer  from './users_reducer';
import drinksReducer from './drinks_reducer';
import regionsReducer from  './region_reducer';
import postsReducer from './posts_reducer';

export default combineReducers({
  users: usersReducer,
  drinks: drinksReducer,
  regions: regionsReducer,
  posts: postsReducer
});
