json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :body, :drink_id, :author_id, :rating
      if post.photo.attached?
      json.photoUrl url_for(post.photo)
    end
    end
  end
end


json.drinks do
  @posts.each do |post|
    json.set! post.drink.id do
      json.extract! post.drink, :id, :bottle_name, :region_id
      json.photoUrl url_for(post.drink.photo)
    end
  end
end

json.users do
  @posts.each do |post|
    json.set! post.user.id do
      json.extract! post.user, :id, :username
      json.pictureUrl url_for(post.user.picture)
    end
  end
end
