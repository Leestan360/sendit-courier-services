class UsersController < ApplicationController

  # skip_before_action :authorize, only: [:index, :create, :show]

  # get all users
  def index
    users = User.all
    render json: users, status: :ok
  end

  # signup as a user
  def create
    user = User.create!(user_params)
    # session[:user_id] = user.id
    render json: user, status: :created
  end

  # show details of the current logged in user
  def show
    render json: @current_user
  end

  # update user details
  def patch
    user = User.find(params[:id])
    user.update!(user_params)
    render json: user, status: :accepted
  end

  # delete a user
  def destroy
    user = User.find(params[:id])
    user.delete
    head :no_content
  end

  private

  # params needed to create and save a new user to the database
  def user_params
    params.permit(:first_name, :last_name, :email, :phone_number, :password, :password_confirmation)
  end

end
