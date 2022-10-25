class StatusesController < ApplicationController
    
    # GET /statuses
    def index 
        statuses = Status.all 
        render json: statuses
    end
end
