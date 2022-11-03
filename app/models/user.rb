class User < ApplicationRecord

  has_secure_password
  
  has_many :parcels
    
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :phone_number, presence: true, length: { is: 10 }, uniqueness: true
  validates :password, presence: true, length: { minimum: 6 }, confirmation: true
  
end
