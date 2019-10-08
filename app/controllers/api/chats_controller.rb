class Api::ChatsController < ApplicationController
  def index
    # ルーティングでの設定によりparamsの中にgroup_idというキーでグループのidが入るので、これを元にDBからグループを取得する
    group = Group.find(params[:group_id])
    # ajaxで送られてくる最後のメッセージのid番号を変数に代入
    last_chat_id = params[:id].to_i
    # 取得したグループでのメッセージ達から、idがlast_message_idより新しい（大きい）メッセージ達のみを取得
    @chats = group.chats.includes(:user).where("id > #{last_chat_id}")
  end
end