class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :user_id
      t.integer :flight_id
      t.integer :seatrow
      t.integer :seatcolumn

      t.timestamps
    end
  end
end
