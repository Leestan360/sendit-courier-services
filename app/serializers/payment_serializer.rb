class PaymentSerializer < ActiveModel::Serializer
  attributes :id, :card_number, :card_name, :expiration_date, :security_code

  belongs_to :user
end
