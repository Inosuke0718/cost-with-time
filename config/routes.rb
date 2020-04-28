Rails.application.routes.draw do
  devise_for :users

  root to: "timer#index"
  resources :timer, only: [:new, :edit, :update]
  resources :users, only: [:edit, :update]

end
