class Tag < ApplicationRecord
  # has_many :tagNotes
  belongs_to :note
end
