Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resources :parcels, only: [:index, :create, :show, :destroy, :update]
  
end