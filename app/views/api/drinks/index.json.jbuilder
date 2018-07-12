@drinks.each do |drink|
  json.set! drink.id do
    json.extract! drink, :id, :description,
    json.botteName drink.bottle_name,
    json.regionId drink.region_id
  end
end
