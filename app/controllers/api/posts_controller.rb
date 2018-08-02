class Api::PostsController < ApplicationController

  def index
    @posts = Post.all.includes(:user, :drink)
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def show
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    if @post.author_id == current_user.id && @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_mesages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if @post.author_id == current_user.id
      @post.destroy
      render :show
    else
      render json: ['you can not delete someone elses post'], status: 422
    end
  end

  private

  def post_params
    params.require(:post).permit(:body, :drink_id, :rating, :photo)
  end

end
