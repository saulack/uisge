class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.text :body, null: false
      t.integer :rating, null: false
      t.integer :author_id, null: false
      t.string :drink_id, null: false

      t.timestamps
    end
  end
end
