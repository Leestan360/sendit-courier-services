class UsersController < ApplicationController

  skip_before_action :authorize, only: [:create, :show]

  def index
    users = User.all
    render json: users, status: :ok
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: @current_user
  end

  def patch
    user = User.find(params[:id])
    user.update!(user_params)
    render json: user, status: :accepted
  end

  def destroy
    user = User.find(params[:id])
    user.delete
    head :no_content
  end

  private

  def user_params
    params.permit(:first_name, :last_name, :email, :phone_number, :password, :password_confirmation)
  end

end
