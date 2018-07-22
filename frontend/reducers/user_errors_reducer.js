import {
  RECEIVE_USER_ERRORS,
  RECEIVE_USER,
  RECEIVE_ALL_USERS,
  CLEAR_ERRORS } from '../actions/user_actions';

const userErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
     return action.errors;
    case RECEIVE_ALL_USERS:
      return [];
    case RECEIVE_USER:
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};
export default userErrorsReducer;
