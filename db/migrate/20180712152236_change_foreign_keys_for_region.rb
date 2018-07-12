class ChangeForeignKeysForRegion < ActiveRecord::Migration[5.2]
  def change
    remove_column :drinks, :type_id
    add_column :drinks, :region_id, :integer
  end
end
