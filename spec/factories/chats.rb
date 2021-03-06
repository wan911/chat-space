FactoryBot.define do
  factory :chat do
    message  {Faker::Lorem.sentence}
    image    {File.open("#{Rails.root}/public/images/test_image.jpg")}
    user
    group
  end
end