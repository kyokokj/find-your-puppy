class Litter < ApplicationRecord
  belongs_to :dog
  has_many :puppies

end
