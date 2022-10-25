class Parcel < ApplicationRecord
    
    belongs_to :user
    has_one :status 

    

end
