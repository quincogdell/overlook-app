class UsersController < ApplicationController


  def index
    @user = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      render json: @user
    else
      render flash: { :thanks => "Sorry you can't register so get out"}
    end
  end




end
