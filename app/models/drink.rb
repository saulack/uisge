# == Schema Information
#
# Table name: drinks
#
#  id          :bigint(8)        not null, primary key
#  bottle_name :string           not null
#  description :text             not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  region_id   :integer
#

class Drink < ApplicationRecord
  validates :bottle_name, :description, :region_id, :user_id, presence: true

  validate :ensure_photo


  belongs_to :user

  belongs_to :region

  has_many :posts,
  foreign_key: :drink_id,
  class_name: :Drink



  has_one_attached :photo

  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "must be attached"
    end
  end

end
