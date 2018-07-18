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

  return $.ajax({
    method: 'PATCH',
    url: `api/users/${userId}`,
    data: user,
    contentType: false,
    processData: false
  });
};
