@regions.each do |region|
  json.set! region.id do
    json.extract! region, :id, :region
  end
end
