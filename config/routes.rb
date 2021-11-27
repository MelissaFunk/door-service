Rails.application.routes.draw do
  resources :services
  resources :drivers, only: [:index, :show, :create, :update]
  resources :users, only: [:create, :update]

  post '/user-login', to: 'sessions#user_create'
  delete '/user-logout', to: 'sessions#user_destroy'
  post '/driver-login', to: 'sessions#driver_create'
  delete '/driver-logout', to: 'sessions#driver_destroy'
  get '/user-auth', to: 'users#show'
  get '/driver-auth', to: 'drivers#driver_auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
