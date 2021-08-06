class Breeder < ApplicationRecord
  has_many :dogs
  has_many :litters, through: :dogs
  has_many :puppies, through: :litters

  validates :name, presence: true
  validates :qualified, inclusion: { in: [ true, false ] }
  validates :name, :breed_type, length: { maximum: 30 }

  scope :qualified, -> { where(qualified: true) }
end
