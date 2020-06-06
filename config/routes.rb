Rails.application.routes.draw do
  
  # get 'sessions/new'

  root to: "timer#index"

  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }
  devise_scope :user do
    post 'users/guest_sign_in', to: 'users/sessions#new_guest'
  end
 
  resources :timer do
    collection do
      get 'cntdwn', to: 'timer#cntdwn'
    end
  end
  resources :users  
  
end
