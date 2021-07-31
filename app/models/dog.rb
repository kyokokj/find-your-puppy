class Dog < ApplicationRecord
  belongs_to :breeder
  has_many :litters
  has_many :puppies, through: :litters

  validates :name, :sex, presence: true
  validates :name, length: { maximum: 30 }
end
