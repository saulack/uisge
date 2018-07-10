class AddSessionToken < ActiveRecord::Migration[5.2]
  add_column :users, :session_token, :string, null: false
  def change
    add_index  :users, :session_token, unique: true
  end
end
