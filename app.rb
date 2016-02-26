require_relative 'config/environment'
require_relative "models/pickup.rb"

class App < Sinatra::Base

  get '/' do
    erb :index
  end

  post '/' do
    text_from_user = params[:user_text]
    @analyzed_text = PickUpLines.new(text_from_user)
    erb :results
  end

end