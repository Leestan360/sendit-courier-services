class CreatePayments < ActiveRecord::Migration[7.0]
  def change
    create_table :payments do |t|
      t.integer :card_number
      t.string :card_name
      t.integer :expiration_date
      t.integer :security_code
      t.integer :user_id

      t.timestamps
    end
  end
end
