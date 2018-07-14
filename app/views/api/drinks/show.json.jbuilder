json.extract! @drink, :id, :description
json.userId :user_id
json.regionId :region_id
json.photoUrl url_for(@drink.photo)
