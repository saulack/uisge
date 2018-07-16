json.extract! @drink, :id, :description, :region_id, :user_id
json.photoUrl url_for(@drink.photo)
