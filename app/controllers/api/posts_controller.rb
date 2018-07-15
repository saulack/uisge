class Api::PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages
    end
  end

  def show
    @post = Post.find(params[:id])
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
    psrams.require(:post).permit(:body, :drink_id, :photo, :rating)
  end

end
