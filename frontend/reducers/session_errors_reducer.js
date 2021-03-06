import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';
import { CLEAR_ERRORS } from '../actions/user_actions';
import { merge } from 'lodash'

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
     return merge({}, state, action.errors)
    case RECEIVE_CURRENT_USER:
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};
export default sessionErrorsReducer;
