# == Schema Information
#
# Table name: posts
#
#  id         :bigint(8)        not null, primary key
#  body       :text             not null
#  rating     :integer          not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  drink_id   :integer          not null
#

class Post < ApplicationRecord
validates :body, :rating, presence: true


belongs_to :drink

belongs_to :user,
foreign_key: :author_id,
class_name: :User

has_one_attached :photo

end
