class PaymentsController < ApplicationController

    skip_before_action :authorize, only: [:index, :create, :show, :destroy, :update]


    def index
        render json: Payment.all, status: :ok
    end

    def create
        payment = Payment.create!(payment_params)
        render json: payment, status: :created
    end

    def show
        render json: payment_params, status: :ok
    end

    def destroy
        payment_params.destroy
        head :no_content
    end

    def update
        payment = payment_params
        payment.update(payment_params)
        render json: payment, status: :ok
    end

    private

    def find_params 
        Payment.find(params[:id])
    end

    def payment_params
        params.permit(:user_id, :card_number, :card_name, :expiration_date, :security_code)
    end
end

