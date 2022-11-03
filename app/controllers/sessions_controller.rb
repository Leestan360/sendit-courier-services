class SessionsController < ApplicationController

  before_action :authorize
  skip_before_action :authorize, only: [:create]

  # login a user
  def create
    user = User.find_by( email: params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :ok
    else
      render json: { errors: ["Please try again or Sign up"] }, status: :unauthorized
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
