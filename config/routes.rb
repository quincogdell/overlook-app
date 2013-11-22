OverlookApp::Application.routes.draw do

  root to: 'welcome#index'
  get '/about' => 'welcome#about'
  # get '/thanks' => 'welcome#thanks'

  resources :entries
  resources :users
end
