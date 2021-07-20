class TagNote < ApplicationRecord
  belongs_to :note
  belongs_to :tag
end
