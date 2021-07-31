class CreatePuppies < ActiveRecord::Migration[6.1]
  def change
    create_table :puppies do |t|
      t.references :litter, null: false, foreign_key: true
      t.string :name, null: false
      t.integer :price, null: false

      t.timestamps
    end
  end
end
