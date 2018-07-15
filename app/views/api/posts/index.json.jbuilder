@posts.each do |post|
json.set! posts do
  json.extract! post, :id, :body, :drink_id, :author_id
  json.photoUrl url_for(drink.photo)
  end
end
