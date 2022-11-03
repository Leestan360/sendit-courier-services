class ParcelsController < ApplicationController

    before_action :authorize
    skip_before_action :authorize, only: [:index, :create, :show, :destroy, :update]

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
        parcel.update(edit_params)
        render json: parcel, status: :ok
    end

    private

    def find_params 
        Parcel.find(params[:id])
    end

    def edit_params
        params.permit(:delivery_location)
    end

    def parcel_params
        params.permit(:user_id, :weight, :pickup_location, :perishable, :fragility, :expected_time, :delivery_location, :category_type)
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
