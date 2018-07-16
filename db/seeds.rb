# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

user1 = User.create!(username: 'saul', password: 'password', email: 'saulack@email.com')
user2 = User.create!(username: 'saul1', password: 'password', email: 'saula@email.com')
user3 = User.create!(username: 'saul2', password: 'password', email: 'saulb@email.com')

Region.destroy_all


speyside = Region.create!(region: 'Speyside')
campbeltown = Region.create!(region: 'Campbeltown')
islay = Region.create!(region: 'Islay')
highlands = Region.create!(region: 'Highland')
lowlands = Region.create!(region: 'Lowland')
blend = Region.create!(region: 'Blend')

Drink.destroy_all
# lagavulin = Drink.create!(bottle_name: 'Lagavulin', region_id: islay.id, user_id: user1.id, description: 'the yummiest')
# d_black = Drink.create!(bottle_name: 'Johny Walker Double Black', region_id: blend.id, user_id: user2.id, description: 'suprisingly good for a johnny wlaker')
# uisge_va = Drink.create!(bottle_name: 'Uisge-va', region_id: blend.id, user_id: user3.id, description: 'best blend out there')


# Post.destroy_all
# post1 = Post.create!(body: "wow im so posty", rating: 4, author_id: 7, drink_id: 13)
# post2 = Post.create!(body: "im another post but im not as posty as the other one", rating: 4, author_id: 7, drink_id: 12)
