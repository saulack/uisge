class CreateRegions < ActiveRecord::Migration[5.2]
  def change
    create_table :regions do |t|
      t.string :region, null: false
      t.timestamps

    end
    add_index :regions, :region, unique: true
  end
end
