class FixSameAgain < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :drinkId
    add_column :posts, :drink_id, :integer, null: false
  end
end
