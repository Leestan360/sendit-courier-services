class CreateParcels < ActiveRecord::Migration[7.0]
  def change
    create_table :parcels do |t|
      t.integer :weight
      t.string :category_type
      t.boolean :perishable
      t.boolean :fragility
      t.datetime :expected_time
      t.datetime :delivered_time
      t.string :delivery_location
      t.string :pickup_location 
      t.string :payment_method

      t.timestamps
    end
  end
end
