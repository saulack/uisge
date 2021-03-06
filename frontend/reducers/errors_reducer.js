import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import drinks from './drink_errors_reducer';
import posts from './post_errors_reducer';
import users from './user_errors_reducer';

export default combineReducers({
  session,
  drinks,
  posts,
  users
});
