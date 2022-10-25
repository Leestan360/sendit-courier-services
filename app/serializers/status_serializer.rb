class StatusSerializer < ActiveModel::Serializer
  attributes :id, :location
  has_one :user
  has_one :parcel
end
