# == Schema Information
#
# Table name: regions
#
#  id         :bigint(8)        not null, primary key
#  region     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Region < ApplicationRecord
  validates :region, presence: true, uniqueness: true

  has_many :bottles,
  foreign_key: :region_id,
  class_name: :Drink

end
