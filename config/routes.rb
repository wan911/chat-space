Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :chats, only: [:index, :create] 

    namespace :api do
      resources :chats, only: :index, defaults: { format: 'json' }
    end
  end
end