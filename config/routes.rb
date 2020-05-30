Rails.application.routes.draw do
  
  get 'sessions/new'

  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }

  devise_scope :user do
    post 'users/guest_sign_in', to: 'users/sessions#new_guest'
  end

  root to: "timer#index"
  resources :timer

  get 'testshow', to: 'timer#testshow'
  resources :users

end
