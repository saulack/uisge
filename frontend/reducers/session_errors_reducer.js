import RECEIVE_ERRORS from '../actions/session_actions';
import RECEIVE_CURRENT_USER from '../actions/session_actions';

import

const defaultErrors = {};

export const sessionErrorsReducer = (state = defaultErrors, action) => {
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
