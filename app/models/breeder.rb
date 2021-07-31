class Breeder < ApplicationRecord
  has_many :dogs
  has_many :litters, through: :dogs
  has_many :puppies, through: :litters

  validates :name, :qualified, presence: true
  validates :name, :breed_type, length: { maximum: 30 }
  validates :experience_year, numericality: { greater_than_or_equal_to: 0 }

  scope :qualified, -> { where(qualified: true) }
end
