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
