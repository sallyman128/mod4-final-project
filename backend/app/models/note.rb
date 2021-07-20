class Note < ApplicationRecord
  has_many :tagNotes
  has_many :tags, through: :tagNotes
end
