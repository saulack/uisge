  json.extract! @user, :id, :username
    json.pictureUrl url_for(@user.picture)
    json.muralUrl url_for(@user.mural)



  json.posts do
    @user.posts.each do |post|
      json.set! post.id do
        json.extract! post, :body, :rating, :author_id, :drink_id, :author_id
      end
    end
  end

  json.user do
    json.extract! @user, :id, :username
    json.pictureUrl url_for(@user.picture)
    json.muralUrl url_for(@user.mural)
  end
