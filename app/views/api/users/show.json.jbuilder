  json.extract! @user, :id, :username
    json.pictureUrl url_for(@user.picture)
    json.muralUrl url_for(@user.mural)



  json.posts do
    @user.posts.each do |post|
      json.set! post.id do
        json.extract! post, :body, :rating, :author_id, :drink_id, :author_id
        json.photoUrl url_for(post.photo)
      end
    end
  end

  json.drinks do
    @user.drinks_added.each do |drink|
      json.set! drink.id do
        json.extract! drink, :id, :bottle_name, :description
        json.photoUrl url_for(drink.photo)
      end
    end
  end

  json.user do
    json.extract! @user, :id, :username
    json.pictureUrl url_for(@user.picture)
    json.muralUrl url_for(@user.mural)
  end
