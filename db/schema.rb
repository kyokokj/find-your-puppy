# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_07_31_073858) do

  create_table "Puppies", force: :cascade do |t|
    t.integer "litter_id", null: false
    t.string "name", null: false
    t.integer "price", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "available", default: false, null: false
    t.integer "sex", null: false
    t.index ["litter_id"], name: "index_puppies_on_litter_id"
  end

  create_table "breeders", force: :cascade do |t|
    t.string "name", null: false
    t.boolean "qualified", default: false, null: false
    t.integer "experience_year"
    t.string "breed_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "dogs", force: :cascade do |t|
    t.integer "breeder_id", null: false
    t.string "name", null: false
    t.integer "sex", null: false
    t.date "birthday"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["breeder_id"], name: "index_dogs_on_breeder_id"
  end

  create_table "litters", force: :cascade do |t|
    t.integer "dog_id", null: false
    t.date "birthday"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["dog_id"], name: "index_litters_on_dog_id"
  end

  add_foreign_key "Puppies", "litters"
  add_foreign_key "dogs", "breeders"
  add_foreign_key "litters", "dogs"
end
