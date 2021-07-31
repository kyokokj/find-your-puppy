class AddAvailableToPuppies < ActiveRecord::Migration[6.1]
  def change
    add_column :Puppies, :available, :boolean, null: false, default: false
  end
end
