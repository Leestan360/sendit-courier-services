class SessionsController < ApplicationController

  skip_before_action :authorize, only: [:create]

  # login a user
  def create
    user = User.find_by( email: params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: ["Invalid email or password"] }, status: :unauthorized
    end
  end

  # logout a user
  def destroy 
    if session[:user_id]
        session.delete :user_id
        head :no_content
    else
      render json: {errors: ["You must be logged in to access this content"] }, status: :unauthorized
    end
  end

end
