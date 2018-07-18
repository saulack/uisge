@users.each do |user|
  json.set! user.id do
    json.extract! user, :username, :id
    json.pictureUrl url_for(user.picture)
    json.muralUrl url_for(user.mural)
  end
end


# json.posts do
# @users.each do |user|
#   json.set! user.posts.id do
#     json.extract! user.posts, :id, :body, :drink_id, :author_id, :rating
#     json.photoUrl url_for(userposts.photo)
#     end
#   end
# end
