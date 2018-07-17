import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { merge } from 'lodash';

  const defaultState = {id: null};

  const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_CURRENT_USER:
    let newState = { id: action.user.id };
    return merge({}, state, newState);
  case LOGOUT_CURRENT_USER:
    return state;
  default:
    return state;
  }
};

export default sessionReducer;
