class User < ApplicationRecord

  has_secure_password
  
  has_many :parcels
  has_many :statuses, through: :parcel
  
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :phone_number, presence: true, length: { is: 12 }, uniqueness: true
  validates :password, presence: true, length: { minimum: 6 }, confirmation: true
  
end
