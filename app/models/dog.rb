class Dog < ApplicationRecord
  belongs_to :breeder
  has_many :litters
  has_many :puppies, through: :litters

  validates :name, :sex, presence: true
  validates :name, length: { maximum: 30 }
  validates :description, length: { maximum: 1000 }
  validates :ic_chip, length: { maximum: 7 }

end
