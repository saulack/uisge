json.extract! @post, :id, :body, :drink_id, :author_id
json.photoUrl url_for(@post.photo)
