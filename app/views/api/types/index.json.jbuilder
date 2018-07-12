@types.each do |type|
  json.set! type.id do
  json.extract! type, :id, :type
  end
end
