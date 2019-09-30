class Group < ApplicationRecord
  has_many :chats
  has_many :users, through: :groups_users
  has_many :groups_users
end
