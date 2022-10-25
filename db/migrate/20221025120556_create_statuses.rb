class CreateStatuses < ActiveRecord::Migration[7.0]
  def change
    create_table :statuses do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :parcel, null: false, foreign_key: true
      t.string :location

      t.timestamps
    end
  end
end
