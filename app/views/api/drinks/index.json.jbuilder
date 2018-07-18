@drinks.each do |drink|
  json.set! drink.id do
    json.extract! drink, :id, :description, :bottle_name, :region_id
    json.photoUrl url_for(drink.photo)
  end
end
