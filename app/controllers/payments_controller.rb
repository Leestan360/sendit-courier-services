class PaymentsController < ApplicationController

    skip_before_action :authorize, only: [:index, :create, :show, :destroy, :update]

    def create
        payment = Payment.create!(payment_params)
        render json: payment, status: :created
    end

    
    private

    def payment_params
        params.permit(:user_id, :card_number, :card_name, :expiration_date, :security_code)
    end
end

