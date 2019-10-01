class Group < ApplicationRecord
  has_many :chats
  has_many :group_users
  has_many :users, through: :group_users
  validates :name, presence: true, uniqueness: true

  def show_last_message
    if (last_chat = chats.last).present?
      last_chat.message? ? last_chat.message : "画像が投稿されています"
    else
      "まだメッセージはありません"
    end
  end
end
