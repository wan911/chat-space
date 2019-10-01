class Chat < ApplicationRecord
  validates :message, presence: true, unless: :image?
end