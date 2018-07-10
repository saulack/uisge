class Api::SessionsController < ApplicationController


  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
    else
      render json: ['invalid username or password']
    end
  end

  def destroy
    logout
    render 'api/sessions/show.html.jbuilder'
  end


end
