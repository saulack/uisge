import { RECEIVE_CURRENT_USER,
         LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER,
         RECEIVE_ALL_USERS,
         RECEIVE_USER_ERRORS} from '../actions/user_actions'
import { RECEIVE_ALL_POSTS } from '../actions/post_actions'
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
        return merge({}, state, { [action.user.id]: action.user });
      case LOGOUT_CURRENT_USER:
        const newState = merge({}, state);
        delete newState.currentUser;
        return newState;
        case RECEIVE_ALL_USERS:
          return merge({}, state, action.users)
        case RECEIVE_USER:
          debugger
          return merge({}, state, {[action.user.id]: action.user})
      case RECEIVE_ALL_POSTS:
          return merge({}, state, action.users)
    default:
      return state;
  }
};

export default usersReducer;
