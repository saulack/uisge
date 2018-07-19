json.partial! "api/posts/post", post: @post




  json.post do
    json.partial! "api/posts/post", post: @post
  end

  json.user do
    json.extract! @post.user, :id, :username
    json.pictureUrl url_for(@post.user.picture)
  end


  json.drink do
    json.extract! @post.drink, :id, :bottle_name, :description, :region_id
    json.photoUrl url_for(@post.drink.photo)
  end
