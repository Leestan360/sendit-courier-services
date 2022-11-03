class ParcelSerializer < ActiveModel::Serializer
  attributes :id, :weight, :pickup_location, :perishable, :fragility, :expected_time, :delivery_location, :category_type, :user_id

  belongs_to :user
end
