@posts.each do |post|
json.set! post.id do
  json.extract! post, :id, :body, :drink_id, :author_id
  # json.photoUrl url_for(drink.photo)
  end
end

# json.users do
#   @posts.each do |post|
#     json.set! post.author_id do
#       json.extract! post.user, :id, :username
#     end
#   end
# end
#
# json.drinks do
#   @posts.each do |post|
#     json.set! post.drink_id do
#       json.extract! post.drink, :id, :bottle_name, :region_id, :user_id
#     end
#   end
# end