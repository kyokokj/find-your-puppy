class Puppy < ApplicationRecord
  belongs_to :litter
  belongs_to :dog, through: :litter
  belongs_to :breeder, through: :dog

  validates :name, :price, :available, presence: true
  validates :name, length: { maximum: 30 }
  validates :peice, numericality: { greater_than: 0 }

  scope :available, -> { where(available: true) }

end
