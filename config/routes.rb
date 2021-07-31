Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :breeders, only: %i[index] do
        resources :dogs, only: %i[index]
      end
    end
  end
end
