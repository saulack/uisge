import * as PostApiUtil from '../util/post_api_util'

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_POST_ERRORS =  'RECEIVE_POST_ERRORS';

export const receiveAllPosts = ({posts, users, drinks}) => {
  return {
    type: RECEIVE_ALL_POSTS,
    posts,
    users,
    drinks
  };
};

export const receivePost = post => {
  return {
    type: RECEIVE_POST,
    post
  };
};

export const removePost = post => {
  return {
    type: REMOVE_POST,
    postId: post.id
  };
};

export const receivePostErrors = errors => {
  return {
    type: RECEIVE_POST_ERRORS,
    errors
  };
};

export const fetchPosts = () => {
  return dispatch => {
    return PostApiUtil.fetchPosts().then( payload => {
      return dispatch(receiveAllPosts(payload)) ,err => {
        return dispatch(receivePostErrors(err.responseJSON));
      }
    });
  };
};

export const fetchPost = id => {
  return dispatch => {
    return PostApiUtil.fetchPost(id).then( post => {
      return dispatch(receivePost(post)), err => {
        dispatch(receivePostErrors(err.responseJSON));
      }
    });
  };
};

export const createPost = post => {
  return dispatch => {
    return PostApiUtil.createPost(post).then( post => {
      return dispatch(receivePost(post)), err => {
        return dispatch(receivePostErrors(err.responseJSON));
      }
    });
  };
};

export const updatePost = post => {
  return dispatch => {
    return PostApiUtil.updatePost(post).then( post => {
      return dispatch(receivePost(post)), err => {
        return dispatch(receivePostErrors(err.responseJSON))
      }
    });
  };
};

export const deletePost = id => {
  return dispatch => {
    return PostApiUtil.deletePost(id).then( post => {
      return dispatch(removePost(post)), err => {
        return dispatch(receivePostErrors(err.responseJSON))
      }
    });
  };
};
