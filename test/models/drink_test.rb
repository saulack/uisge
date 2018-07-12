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

require 'test_helper'

class DrinkTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
