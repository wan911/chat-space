require 'rails_helper'

RSpec.describe Chat, type: :model do
  describe '#create' do
    context 'can save' do
      it "メッセージがあれば保存" do
        expect(build(:chat, image: nil)).to be_valid
      end

      it "画像があれば保存できる" do
        expect(build(:chat, message: nil)).to be_valid
      end

      it "画像とメッセージがあれば保存できる" do
        expect(build(:chat)).to be_valid
      end
    end

    context 'can not save' do
      it "メッセージも画像もないと保存できない" do
        chat = build(:chat, message: nil, image: nil)
        chat.valid?
        expect(chat.errors[:message]).to include('を入力してください')
      end

      it "group_idがないと保存できない" do
        chat = build(:chat, group: nil)
        chat.valid?
        expect(chat.errors[:group]).to include('を入力してください')
      end

      it "user_idがないと保存できない" do
        chat = build(:chat, user: nil)
        chat.valid?
        expect(chat.errors[:user]).to include('を入力してください')
      end
    end
  end
end