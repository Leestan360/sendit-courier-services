class Parcel < ApplicationRecord
    
    belongs_to :user

    validates :weight, presence: true, numericality: { only_integer: true }
    validates :pickup_location, presence: true
    validates :perishable, inclusion: [true, false]
    validates :fragility, inclusion: [true, false]
    # validates :expected_time, presence: true 
    validates :delivery_location, presence: true
    validates :category_type, presence: true, inclusion: { in: %w[Clothings Computing Cosmetics Drinks Electronics Fashions Gaming]}
    validates :user_id, presence: true

end
