# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




User.destroy_all
Drink.destroy_all
Post.destroy_all
Region.destroy_all

user1 = User.create!(username: 'saul', password: 'password', email: 'saulack@email.com')
user2 = User.create!(username: 'matthias', password: 'password', email: 'matthias@email.com')
user3 = User.create!(username: 'SomeOtherDude', password: 'password', email: 'otherguy@email.com')
guet = User.create!(username: 'Guest', password: 'password', email: 'guest@guest.com')

speyside = Region.create!(region: 'Speyside')
campbeltown = Region.create!(region: 'Campbeltown')
islay = Region.create!(region: 'Islay')
highlands = Region.create!(region: 'Highland')
lowlands = Region.create!(region: 'Lowland')
blend = Region.create!(region: 'Blend')

#
# lagavulin = Drink.new(
#   bottle_name: 'Lagavulin',
#   region_id: islay.id,
#   description: 'the yummiest')
#
#   lagavulin.photo.attach(io: File.open('/home/saulack/Pictures/scotch/ard.jpg'), filename: 'onedude.jpg')
#
# d_black = Drink.new(
#   bottle_name: 'Johny Walker Double Black',
#   region_id: blend.id,
#   description: 'suprisingly good for a johnny wlaker')
#
# d_black.photo.attach(io: File.open('/home/saulack/Pictures/scotch/ard.jpg'), filename: 'anotherdude.jpg')
#
#
# oban = Drink.new(
#   bottle_name: 'Uisge-va',
#   region_id: blend.id,
#   description: 'best blend out there')
#
# oban.photo.attach(io: File.open('/home/saulack/Pictures/scotch/ard.jpg'), filename: 'yupanother.jpg')
#
#
# post1 = Post.new(
#   body: "wow im so posty",
#   rating: 4,
#   author_id: user1.id,
#   drink_id: lagavulin.id)
#
# post1.photo.attach(io: File.open('/home/saulack/Pictures/scotch/ard.jpg'), filename: 'newerends.jpg')
#
#
#
#
#   lagavulin.save!
#   d_black.save!
#   oban.save!
#   post1.save!
