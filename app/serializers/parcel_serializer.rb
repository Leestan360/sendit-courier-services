class ParcelSerializer < ActiveModel::Serializer
  attributes :id, :weight, :category_type, :perishabile, :fragility
end
