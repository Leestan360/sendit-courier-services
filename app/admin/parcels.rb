ActiveAdmin.register Parcel do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :weight, :pickup_location, :perishable, :fragility, :expected_time, :delivery_location, :category_type, :status, :user_id
  #
  # or
  #
  # permit_params do
  #   permitted = [:weight, :pickup_location, :perishable, :fragility, :expected_time, :delivery_location, :category_type, :status, :user_id]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  
end
