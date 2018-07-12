@regions.each do |region|
  json.set! region.id do
    json.extract! :id, :region
  end
end
