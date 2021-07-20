class Tag < ApplicationRecord
  has_many :tagNotes
  has_many :notes, through: :tagNotes
end
