json.extract! post, :id, :body, :drink_id, :author_id, :rating
if post.photo.attached?
  json.photoUrl url_for(post.photo)
end
