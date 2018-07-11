class Api::SessionsController < ApplicationController


  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      render 'api/users/show.json.jbuilder'
    else
      render json: ['invalid username or password']
    end
  end

  def destroy
    logout
    render 'api/show.json.jbuilder'
  end


end
