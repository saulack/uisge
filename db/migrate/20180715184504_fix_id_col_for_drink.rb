class FixIdColForDrink < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :drink_id
    add_column :posts, :drinkId, :integer, null: false
  end
end
