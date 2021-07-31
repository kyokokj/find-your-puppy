class Puppy < ApplicationRecord
  belongs_to :litter

  validates :name, :price, :available, presence: true
  validates :name, length: { maximum: 30 }
  validates :price, numericality: { greater_than: 0 }

  scope :available, -> { where(available: true) }

end
