class Status < ApplicationRecord
  belongs_to :user, through: :parcel
  belongs_to :parcel
end
