class CreateParcels < ActiveRecord::Migration[7.0]
  def change
    create_table :parcels do |t|
      t.integer :weight
      t.integer :length
      t.integer :width
      t.string :category_type
      t.boolean :perishabile
      t.boolean :fragility

      t.timestamps
    end
  end
end
