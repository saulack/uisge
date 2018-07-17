const fetchUsers = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/users'
  });
};

const fetchUser = (id) => {
  return $.ajax({
    method: 'GET'
    url: `/api/users/${id}`
  });
};
