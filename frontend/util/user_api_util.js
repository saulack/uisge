export const fetchUsers = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/users'
  });
};

export const fetchUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  });
};

export const updateUser = (user, userId) => {
  debugger
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${userId}`,
    user,
    contentType: false,
    processData: false
  });
};
