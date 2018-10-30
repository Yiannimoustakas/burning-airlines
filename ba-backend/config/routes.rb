Rails.application.routes.draw do
  resources :airplanes
  resources :flights
  resources :reservations
  resources :users
  get "/login" => "session#new"
  post "/login" => "session#create"
  delete "/login" => "session#destroy"
end
