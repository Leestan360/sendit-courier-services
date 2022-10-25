class CreateParcels < ActiveRecord::Migration[7.0]
  def change
    create_table :parcels do |t|
      t.integer :weight
      t.string :category_type
      t.boolean :perishabile
      t.boolean :fragility
      t.datetime :expected_time
      t.datetime :delivered_time
      t.string :delivery_location
      t.string :name

      t.timestamps
    end
  end
end
