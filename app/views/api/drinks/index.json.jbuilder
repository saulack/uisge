@drinks.each do |drink|
  json.set! drink.id do
    json.extract! drink, :id, :description
    json.bottleName drink.bottle_name
    # json.regionId drink.region_id
    # json.photoUrl url_for(drink.photo)
  end
end
