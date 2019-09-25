# ChatSpace DB設計
## usersテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null: false, index: true|
|email|string|null: false, unique: true|
|password|string|null: false|
### Association
- has_many :chats
- has_many :groups, through: :groups_users
- has_many :groups_users

## groupsテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null: false|
### Association
- has_many :chats
- has_many :users, through: :groups_users
- has_many :groups_users

## groups_usersテーブル
|Column|Type|Option|
|------|----|------|
|user|references|null: false, foreign-key: true|
|group|references|null: false, foreign-key: true|
### Association
- belongs_to :user
- belongs_to :group

### chatsテーブル
|Column|Type|Option|
|------|----|------|
|message|text||
|image|string||
|user|references|null: false, foreign-key: true|
|group|references|null: false, foreign-key: true|
### Association
- belongs_to :user
- belongs_to :group