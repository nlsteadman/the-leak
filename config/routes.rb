# config/routes.rb
Rails.application.routes.draw do
  resources :product_locations
  resources :reviews
  resources :locations
  resources :location_types
  resources :products
  resources :users

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

  get "/get-current-user", to: "sessions#get_current_user"
  post "/login", to: "sessions#login"
end

