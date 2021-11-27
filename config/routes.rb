Rails.application.routes.draw do
  resources :services
  resources :specialties
  resources :drivers
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
