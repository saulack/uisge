const fetchPosts = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/posts'
  });
};

const fetchPost = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/posts/${id}`
  });
};

const createPost = (post) => {
  return $.ajax({
    method: 'POST',
    url: 'api/posts/',
    data: post,
    contentType: false,
    processData: false
  });
};


const updatePost = (post) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/posts/${post.id}`,
    data: post,
    contentType: false,
    processData: false
  });
};

const deletePost = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/posts/${id}`
  });
};
