Rails.application.routes.draw do
  root 'galaxies#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :galaxies do
    resources :stars
  end

end
