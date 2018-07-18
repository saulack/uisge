export const fetchPosts = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/posts'
  });
};

export const fetchPost = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/posts/${id}`
  });
};

export const createPost = (post) => {
  return $.ajax({
    method: 'POST',
    url: 'api/posts/',
    data: post,
    contentType: false,
    processData: false
  });
};


export const updatePost = (post, postId) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/posts/${postId}`,
    data: post,
    contentType: false,
    processData: false
  });
};

export const deletePost = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/posts/${id}`
  });
};
