json.message    @chat.message
json.image      @chat.image.url
json.time       @chat.created_at.strftime("%Y/%m/%d(#{%w(日 月 火 水 木 金 土)[@chat.created_at.wday]})%H:%M:%S")
json.user_name  @chat.user.name
json.id         @chat.id