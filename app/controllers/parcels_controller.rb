class ParcelsController < ApplicationController

    # skip_before_action :authorize, only: [:index, :create, :show, :destroy, :update]

    def index
        render json: Parcel.all, status: :ok
    end

    def create
        parcel = Parcel.create!(parcel_params)
        render json: parcel, status: :created
    end

    def show
        render json: find_params, status: :ok
    end

    def destroy
        find_params.destroy
        head :no_content
    end

    def update
        parcel = find_params
        parcel.update(parcel_params)
        render json: parcel, status: :ok
    end

    private

    def find_params 
        Parcel.find(params[:id])
    end

    def parcel_params
        params.permit(:user_id, :weight, :pickup_location, :perishable, :fragility, :expected_time, :delivery_location, :category_type)
    end
end
