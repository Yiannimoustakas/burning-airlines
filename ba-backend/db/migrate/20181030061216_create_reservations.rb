class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :user_id
      t.integer :flight_id
      t.integer :seat_row
      t.integer :seat_column

      t.timestamps
    end
  end
end
