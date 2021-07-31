class CreateDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :dogs do |t|
      t.references :breeder, null: false, foreign_key: true
      t.string :name, null: false
      t.integer :sex, null: false
      t.date :birthday

      t.timestamps
    end
  end
end
