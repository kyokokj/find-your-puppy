class AddDescriptionToDogs < ActiveRecord::Migration[6.1]
  def change
    add_column :dogs, :description, :text
    add_column :dogs, :ic_chip, :integer
  end
end
