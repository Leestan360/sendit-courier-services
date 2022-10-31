Rails.application.routes.draw do
  resources :payments
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  resources :parcels, only: [:index, :create, :show, :destroy, :update]
  resources :users, only: [:index, :create]

end
