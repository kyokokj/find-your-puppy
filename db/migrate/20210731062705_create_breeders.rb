class CreateBreeders < ActiveRecord::Migration[6.1]
  def change
    create_table :breeders do |t|
      t.string :name, null: false
      t.boolean :qualified, null: false, default: false
      t.integer :experience_year
      t.string :breed_type

      t.timestamps
    end
  end
end
