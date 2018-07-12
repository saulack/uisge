import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import drinks from './drink_errors_reducer'

export default combineReducers({
  session,
  drinks
});
