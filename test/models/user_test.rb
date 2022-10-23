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

  test "last_name must be present" do
    user = User.create(last_name: " ")
    assert_not user.valid?, "last_name is an empty string"
    puts "last name present"
  end

  test "email must be present and unique" do
    user = User.create(email: " ")
    assert_not user.valid? && user.unique?, "email is an empty string"
    puts "email present and unique"
  end

  test "phone_number must be present, minimum 9 characters and unique" do
    user = User.create(phone_number: " ")
    assert_not user.valid? && user.unique? && user.length >= 9, "phone_number is an empty string"
    puts "phone_number present, has a minimum of 9 characters and unique"
  end

  test "password must be present and a minimum of 6 characters" do
    user = User.create(password: " ")
    assert_not user.valid? && user.length >= 6, "password is an empty string"
    puts "password present and has a minimum of 6 characters"
  end

end