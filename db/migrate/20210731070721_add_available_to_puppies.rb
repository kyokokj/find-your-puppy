class AddAvailableToPuppies < ActiveRecord::Migration[6.1]
  def change
    add_column :puppies, :available, :boolean, null: false, default: false
  end
end
