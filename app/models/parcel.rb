class Parcel < ApplicationRecord
    
    belongs_to :user

    validates :weight, presence: true
    validates :pickup_location, presence: true
    # validates :perishable, inclusion: { in: %w[true false]}
    # validates :fragility, inclusion: { in: %w[true false]}
    # validates :expected_time, presence: true 
    validates :delivery_location, presence: true
    validates :category_type, presence: true
    validates :user_id, presence: true

end
