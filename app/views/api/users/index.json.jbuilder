@users.each do |user|
  json.set! user.id do
    json.extract! user, :username, :id
    # json.pictureUrl url_for(user.picture)
    # json.muralUrl url_for(user.mural)
  end
end
