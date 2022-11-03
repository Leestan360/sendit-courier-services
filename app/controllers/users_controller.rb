class UsersController < ApplicationController

  before_action :authorize
  skip_before_action :authorize, only: [:create]

  # get all users
  def index
    users = User.all
    render json: users, status: :ok
  end

  # signup as a user
  def create
    user = User.create!(user_params)
    EmailMailer.with(user: user).new_mail.deliver_later
    session[:user_id] = user.id
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

    # authorizing a user
    def authorize
      @current_user = User.find_by(id: session[:user_id])
      # render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
      if @current_user
        render json: @current_user
      else
        render json: { errors: ["Not authorized"] }, status: :unauthorized
      end
    end

end
