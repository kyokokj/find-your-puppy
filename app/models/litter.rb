class Litter < ApplicationRecord
  belongs_to :dog
  belongs_to :breeder, through: :dog
  has_many :puppies

end
