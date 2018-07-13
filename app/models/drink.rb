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
  validates :bottle_name, :description, presence: true


  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :region,
  foreign_key: :region_id,
  class_name: :Region


  validate :ensure_photo

  has_one_attached :photo

  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "must be attached"
    end
  end

end
