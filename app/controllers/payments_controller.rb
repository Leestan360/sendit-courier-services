class PaymentsController < ApplicationController

    before_action :authorize
    skip_before_action :authorize, only: [:index, :create, :show, :destroy, :update]

    def create
        payment = Payment.create!(payment_params)
        render json: payment, status: :created
    end

    
    private

    def payment_params
        params.permit(:user_id, :card_number, :card_name, :expiration_date, :security_code)
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

