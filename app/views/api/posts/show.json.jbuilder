json.extract! @post, :id, :body,
json.drinkId :drink_Id,
json.authorId :author_Id
json.photoUrl url_for(drink.photo)
