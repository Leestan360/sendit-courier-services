require 'test_helper'
class UserTest < ActiveSupport::TestCase

  test "user should be valid" do
    user = User.create(first_name: "Stanley", last_name: "Mayore", email: "stanley@gmail.com", phone_number: "+254702425434", password: "12345678", password_confirmation: "12345678")
    assert user.valid?
    puts "user is valid"
  end

  test "first_name must be present" do
    user = User.create(first_name: " ")
    assert_not user.valid?, "first_name is an empty string"
    puts "first name present"
  end

end