Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"
    namespace :api, defaults: {format: :json} do
      resources :users, only: [:create]
      resource :session, only: [:create, :destroy, :show]
      resources :drinks, only: [:create, :show, :update, :index]
      resources :regions, only: [:index]
      resources :posts, only: [:create, :edit, :index, :show, :destroy]
  end
end
