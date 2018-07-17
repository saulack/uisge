json.extract! @drink, :id, :description, :region_id, :user_id, :bottle_name
json.photoUrl url_for(@drink.photo)
