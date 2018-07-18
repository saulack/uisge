class Api::DrinksController < ApplicationController

  def index
    @drinks = Drink.all
    render :index
  end

  def create
    @drink = Drink.new(drink_params)
    @drink.user_id = current_user.id
    if @drink.save
      render :show
    else
      render json: @drink.errors.full_messages, status: 422
    end
  end

  def update
    @drink = Drink.find(params[:id])
    if @drink.update_attributes(drink_params)
      render :show
    else
      render json: @drink.errors.full_messages, status: 422
    end
  end

  def destroy
    @drink = drink.find(params[:id])
    @drink.destroy
    render json: {}
  end

  def show
    @drink = Drink.find(params[:id])
    render :show
  end

  private

  def  drink_params
    params.require(:drink).permit(:bottle_name, :description, :region_id, :photo)
  end

end
