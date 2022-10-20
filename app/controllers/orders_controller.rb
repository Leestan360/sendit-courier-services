class OrdersController < ApplicationController

    # GET/orders
    def index
      orders = order.all 
      render json: orders, status: :ok 
    end

    # GET/orders/:id
    def show
        order = find_order
        render json: order, status: :ok
    end

    # POST/orders
    def create
        order = Order.create!(order_params)
        render json: order, status: :created
    end

    # PATCH/orders 
    def update
        order = find_order
        order.update!(order_params)
        render json: order, status: :updated
    end
    # DELETE/orders/:id
    def destroy
        order = find_order
        Order.destroy 
        head :no_content
    end

    private 

    def find_order 
       Order.find(params[:id])
    end 

    def order_params
        params.permit(:user_id, :parcel_id, :delivery_status, :delivery_type, :delivery_location, :pickup_location, :payment_method)
    end
end
