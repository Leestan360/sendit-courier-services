class OrderSerializer < ActiveModel::Serializer
  attributes :id, :delivery_status, :delivery_type, :delivery_location, :pickup_location, :payment_method
  has_one :user
  has_one :parcel
end
