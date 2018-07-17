class Api::PostsController < ApplicationController

  def index
    @posts = Post.all.includes(:user, :drink)
  end

  def create
    @posts = Post.new(post_params)
    @posts.author_id = current_user.id
    if @posts.save
      render :show
    else
      render json: @posts.errors.full_messages, status: 422
    end
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  def update
    @post = Post.find(prams[:id])
    if @post.author_id == current_user.id && @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_mesages
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render json: {}
  end

  private

  def post_params
    params.require(:post).permit(:body, :drink_id, :photo, :rating)
  end

end
