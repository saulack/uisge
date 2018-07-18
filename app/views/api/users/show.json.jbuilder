json.extract! @user, :id, :username
  json.pictureUrl url_for(@user.picture)
  json.muralUrl url_for(@user.mural)
