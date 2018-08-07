json.extract! @user, :id, :username
  json.pictureUrl url_for(@user.picture)
  json.muralUrl url_for(@user.mural)


if @user.posts
  json.posts do
    @user.posts.each do |post|
      json.set! post.id do
        json.extract! post, :id, :body, :rating, :author_id, :drink_id, :author_id
        if post.photo.attached?
          json.photoUrl url_for(post.photo)
        end
      end
    end
  end
else
  json.posts do
   {}
  end
end

if @user.drinks
  json.drinks do
    @user.drinks.each do |drink|
      json.set! drink.id do
        json.extract! drink, :id, :bottle_name, :description
        json.photoUrl url_for(drink.photo)
      end
    end
  end
else
  json.drinks do
  {}
  end
end

json.user do
  json.partial! "api/users/user", user: @user
end
