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

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
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
    return UserApiUtil.fetchUser(id).then( user => {
      return dispatch(receiveUser(user)), err => {
        return dispatch(receiveUserErrors(err.responseJSON))
      };
    })
  };
};