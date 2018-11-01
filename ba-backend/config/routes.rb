Rails.application.routes.draw do

  root "flights#index"
  resources :airplanes
  resources :flights
  resources :reservations
  resources :users
  get "/login" => "session#new"
  post "/login" => "session#create"
  delete "/login" => "session#destroy"
end
