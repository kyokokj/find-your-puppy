class AddStartFromDeleteExperienceInBreeders < ActiveRecord::Migration[6.1]
  def change
    remove_column :breeders, :experience_year, :integer
    add_column :breeders, :start_from, :date
  end
end
