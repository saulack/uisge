import RECEIVE_ERRORS from '../actions/session_actions';
import RECEIVE_CURRENT_USER from '../actions/session_actions';



const sessionErrorsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
      return merge({}, state, action.errors);
    case RECEIVE_CURRENT_USER:
      return defaultErrors;
    default:
    return state;
  }
};

export default sessionErrorsReducer;
