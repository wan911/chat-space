class Chat < ApplicationRecord
  validates :message, presence: true, unless: :image?
  mount_uploader :image, ImageUploader
end