@users.each do |user|
  json.set! user.id do
    json.extract! user, :username, :id
    # json.photoUrl url_for(user.photo)
  end
end
