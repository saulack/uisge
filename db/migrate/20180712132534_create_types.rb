class CreateTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :types do |t|
      t.string :type, null: false

      t.timestamps
    end
    add_index :types, :type, unique: true
  end
end
