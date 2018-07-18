class Api::UsersController < ApplicationController


  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end


  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show.json.jbuilder'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    debugger
    if @user.id == current_user.id && @user.update(user_params)
      render :show
    else
      render @user.errors.full_messages, status: 422
    end
  end


  private

  def user_params
    debugger
    params.require(:user).permit(:username, :email, :password, :picture, :mural)
  end


end
