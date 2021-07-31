class AddSexToPuppies < ActiveRecord::Migration[6.1]
  def change
    add_column :puppies, :sex, :integer, null: false
  end
end
