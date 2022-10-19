class User < ApplicationRecord

  has_secure_password
  
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :phone_number, length: { minimum: 9 }
  validates :password, length: { minimum: 6 }
  
end
