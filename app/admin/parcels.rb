ActiveAdmin.register Parcel do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :weight, :length, :width, :category_type, :perishabile, :fragility, :status
  #
  # or
  #
  # permit_params do
  #   permitted = [:weight, :length, :width, :category_type, :perishabile, :fragility]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  
end
