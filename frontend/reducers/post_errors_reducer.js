import { RECEIVE_POST_ERRORS,
  RECEIVE_POST,
  RECEIVE_ALL_POSTS, } from '../actions/post_actions';
  import { CLEAR_ERRORS } from '../actions/user_actions';


const postErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POST_ERRORS:
     return action.errors;
    case RECEIVE_ALL_POSTS:
      return [];
    case RECEIVE_POST:
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};
export default postErrorsReducer;
