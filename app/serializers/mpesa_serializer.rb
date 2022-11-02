class MpesaSerializer < ActiveModel::Serializer
  attributes :id, :checkoutRequestID, :merchantRequestID, :amount, :mpesaReceiptNumber, :phoneNumber
end
