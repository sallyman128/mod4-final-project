Rails.application.routes.draw do
  # resources :tags
  resources :notes, only: [:index, :create, :destroy]
  resources :tags, only: [:index, :create, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
