import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { merge } from 'lodash';

export const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user });
      case LOGOUT_CURRENT_USER:
        const newState = merge({}, state);
        delete newState.currentUser;
        return newState;
    default:
      return state;
  }
};
