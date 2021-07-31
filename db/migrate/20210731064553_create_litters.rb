class CreateLitters < ActiveRecord::Migration[6.1]
  def change
    create_table :litters do |t|
      t.references :dog, null: false, foreign_key: true
      t.date :birthday

      t.timestamps
    end
  end
end
