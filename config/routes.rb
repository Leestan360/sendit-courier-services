Rails.application.routes.draw do
  resources :parcels, only: [:index, :create, :show, :destroy, :update]
  
end