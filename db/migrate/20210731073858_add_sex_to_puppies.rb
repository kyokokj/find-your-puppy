class AddSexToPuppies < ActiveRecord::Migration[6.1]
  def change
    add_column :Puppies, :sex, :integer, null: false
  end
end
