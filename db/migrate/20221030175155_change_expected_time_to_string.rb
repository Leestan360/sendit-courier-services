class ChangeExpectedTimeToString < ActiveRecord::Migration[7.0]
  def change
    change_column :parcels, :expected_time, :string
  end
end
