class Chat < ApplicationRecord
  validates :message, presence: true, unless: :image?
  mount_uploader :image, ImageUploader
  belongs_to :group
  belongs_to :user
end