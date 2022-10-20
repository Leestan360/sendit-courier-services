class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :parcel, null: false, foreign_key: true
      t.string :delivery_status
      t.string :delivery_type
      t.string :delivery_location
      t.string :pickup_location
      t.string :payment_method

      t.timestamps
    end
  end
end
