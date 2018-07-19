import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';


export const receiveAllUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};

export const receiveUser = ({ user, posts, drinks }) => {
  return {
    type: RECEIVE_USER,
    user,
    posts,
    drinks
  };
};

export const receiveUserErrors = errors => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors
  };
};

export const fetchUsers = () => {
  return dispatch => {
    return UserApiUtil.fetchUsers().then(users => {
      return dispatch(receiveAllUsers(users)), err => {
        return dispatch(receiveUserErrors(err.responseJSON))
      };
    })
  };
};



export const fetchUser = (id) => {
  return dispatch => {
    return UserApiUtil.fetchUser(id).then( payload => {
      return dispatch(receiveUser(payload)), err => {
        return dispatch(receiveUserErrors(err.responseJSON))
      };
    })
  };
};


export const updateUser = (user, userId) => {
  return dispatch => {
    return UserApiUtil.updateUser(user, userId).then( user => {
      return dispatch(receiveUser(user)), err => {
        return dispatch(receiveUserErrors(err.responseJSON))
      };
    })
  };
};
