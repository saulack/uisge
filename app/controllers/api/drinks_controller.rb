class Api::DrinksController < ApplicationController

  def index
    @drinks = Drink.all
    render :index
  end

  def create
    @drink = Drink.new(drink_params)
    if @drink.save
      render :show
    else
      render json: @drink.errors.full_messages, status: 422
    end
  end

  def upadte
    @drink = Drink.find(params[:id])
    if @drink.update(drink_params)
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
  end

  private

  def  drink_params
    params.require(:drink).permit(:drink_name, :description, :region_id)
  end

end
