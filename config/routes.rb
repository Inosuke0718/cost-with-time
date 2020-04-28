Rails.application.routes.draw do
  devise_for :users

  root to: "timer#index"
  resources :timer
  resources :users

end
