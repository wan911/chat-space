json.array! @chats do |chat|
  json.message    chat.message
  json.image      chat.image
  json.created_at chat.created_at
  json.user_name  chat.user.name
  json.id         chat.id
end