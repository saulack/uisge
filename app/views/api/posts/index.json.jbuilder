json.users do
  @posts.each do |post|
    json.set! post.user.id do
      json.extract! post.user, :id, :username
      # json.photoUrl url_for(drink.photo)
    end
  end
end

json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :body, :drink_id, :author_id
      # json.photoUrl url_for(drink.photo)
    end
  end
end

json.drinks do
  @posts.each do |post|
    json.set! post.drink.id do
      json.extract! post.drink, :id, :bottle_name, :region_id
      # json.photoUrl url_for(drink.photo)
    end
  end
end
