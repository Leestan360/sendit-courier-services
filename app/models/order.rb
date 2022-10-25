class Order < ApplicationRecord
  belongs_to :user
  belongs_to :parcel

  validates :delivery_status, presence: true 
  validates :delivery_type, presence: true
  validates :delivery_location, presence: true 
  validates :pickup_location, presence: true 
  validates :payment_method, presence: true
end
