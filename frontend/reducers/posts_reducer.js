import { RECEIVE_ALL_POSTS,
  RECEIVE_POST,
  REMOVE_POST } from '../actions/post_actions';
import { merge } from 'lodash';


const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return merge({}, state, action.posts);
    case RECEIVE_POST:
      return merge({}, state, {[action.post.id]: action.post});
    case REMOVE_POST:
      const newState = merge({}, state);
      delete newState[action.postId];
      return newState;
    default:
      return state;
  }
}

export default postsReducer;
