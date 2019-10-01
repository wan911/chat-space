class CreateChats < ActiveRecord::Migration[5.0]
  def change
    create_table :chats do |t|
      t.text        :message
      t.string      :image
      t.references  :user, null: false, foreign_key: true
      t.references  :group, null: false, foreign_key: true
      t.timestamps
    end
  end
end
