import { RECEIVE_DRINK_ERRORS,
  RECEIVE_DRINK,
  RECEIVE_ALL_DRINKS, } from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DRINK_ERRORS:
     return action.errors;
    case RECEIVE_ALL_DRINKS:
      return [];
    case RECEIVE_DRINK:
      return [];
    default:
      return state;
  }
};
export default sessionErrorsReducer;