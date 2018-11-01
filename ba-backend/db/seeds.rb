# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

puts "Creating users..."

u1 = User.create name: 'Yianni'
u2 = User.create name: 'John'
u3 = User.create name: 'Andy'

puts "Created #{ User.all.length } users: "
puts User.pluck(:name).join(', ')

Airplane.destroy_all

puts "Creating airplane..."

a1 = Airplane.create name: '747', rows: 32, columns: 4
a2 = Airplane.create name: 'A330', rows: 58, columns: 6
a3 = Airplane.create name: '787', rows: 45, columns: 4
a4 = Airplane.create name: 'A380', rows: 80, columns: 8
a5 = Airplane.create name: '787-9', rows: 80, columns: 6
a6 = Airplane.create name: 'A330-300', rows: 80, columns: 6
a6 = Airplane.create name: '747-500', rows: 60, columns: 6

puts "Created #{ Airplane.all.length } airplane: "
puts Airplane.pluck(:name).join(', ')


Flight.destroy_all

puts "Creating flight schedules..."

c1 = Flight.create flight_no: 'BA1', date: '01/12/2018', origin:'SYD',  destination:'LHR', airplane: a1
c2 = Flight.create flight_no: 'BA2', date: '10/01/2019', origin:'SYD', destination:'LAX', airplane: a4
c3 = Flight.create flight_no: 'BA3', date: '15/12/2018', origin:'SYD', destination:'BKK', airplane: a2
c4 = Flight.create flight_no: 'BA4', date: '01/11/2018', origin:'SYD', destination:'JFK', airplane: a4
c5 = Flight.create flight_no: 'BA5', date: '20/12/2018', origin:'SYD', destination:'HND', airplane: a1
c6 = Flight.create flight_no: 'BA6', date: '01/12/2018', origin:'SYD', destination:'LHR', airplane: a4
c7 = Flight.create flight_no: 'BA7', date: '01/12/2018', origin:'SYD', destination:'PVG', airplane: a3
c8 = Flight.create flight_no: 'BA8', date: '06/11/2018', origin:'SYD', destination:'SIN', airplane: a3
c9 = Flight.create flight_no: 'BA9', date: '11/11/2018', origin:'SYD', destination:'LHR', airplane: a2
c10 = Flight.create flight_no: 'BA10', date: '24/12/2018', origin:'SYD', destination:'BER', airplane: a4
c11 = Flight.create flight_no: 'BA11', date: '12/02/2019', origin:'JFK', destination:'BER', airplane: a1
c12 = Flight.create flight_no: 'BA12', date: '11/03/2019', origin:'BKK', destination:'HND', airplane: a1
c13 = Flight.create flight_no: 'BA13', date: '01/12/2018', origin:'BKK', destination:'HND', airplane: a1
c14 = Flight.create flight_no: 'BA14', date: '01/12/2018', origin:'JFK', destination:'SYD', airplane: a4
c15 = Flight.create flight_no: 'BA15', date: '04/01/2019', origin:'LHR', destination:'SYD', airplane: a3
c16 = Flight.create flight_no: 'BA16', date: '14/01/2019', origin:'LHR', destination:'SIN', airplane: a3
c17 = Flight.create flight_no: 'BA17', date: '26/01/2019', origin:'SYD', destination:'SIN', airplane: a3
c18 = Flight.create flight_no: 'BA18', date: '13/12/2018', origin:'SYD', destination:'SIN', airplane: a3
c19 = Flight.create flight_no: 'BA19', date: '01/03/2019', origin:'SYD', destination:'SIN', airplane: a3
c20 = Flight.create flight_no: 'BA20', date: '01/03/2019', origin:'SYD', destination:'SIN', airplane: a3
c21 = Flight.create flight_no: 'BA21', date: '23/12/2018', origin:'SYD', destination:'AEX', airplane: a3


puts "Created #{ Flight.all.length } flights: "
puts Flight.pluck(:flight_no).join(', ')

Reservation.destroy_all

puts "Creating flight reservations..."


Reservation.create user: u1, flight: c1, seat_row: 1, seat_column: 1
Reservation.create user: u2, flight: c2, seat_row: 4, seat_column: 3
Reservation.create user: u3, flight: c4, seat_row: 8, seat_column: 4
Reservation.create user: u2, flight: c1, seat_row: 9, seat_column: 1
Reservation.create user: u3, flight: c2, seat_row: 18, seat_column: 6
Reservation.create user: u2, flight: c5, seat_row: 17, seat_column: 4
Reservation.create user: u1, flight: c10, seat_row: 4, seat_column: 8
Reservation.create user: u2, flight: c1, seat_row: 5, seat_column: 7
Reservation.create user: u1, flight: c10, seat_row: 21, seat_column: 1
Reservation.create user: u2, flight: c3, seat_row: 30, seat_column: 2
Reservation.create user: u3, flight: c2, seat_row: 32, seat_column: 4
Reservation.create user: u2, flight: c4, seat_row: 21, seat_column: 5
Reservation.create user: u2, flight: c3, seat_row: 32, seat_column: 5
Reservation.create user: u3, flight: c5, seat_row: 2, seat_column: 1
Reservation.create user: u1, flight: c6, seat_row: 31, seat_column: 2
Reservation.create user: u2, flight: c7, seat_row: 32, seat_column: 1
Reservation.create user: u1, flight: c8, seat_row: 20, seat_column: 6
Reservation.create user: u2, flight: c2, seat_row: 15, seat_column: 2
Reservation.create user: u3, flight: c9, seat_row: 8, seat_column: 3
Reservation.create user: u1, flight: c3, seat_row: 4, seat_column: 4
#

puts "Created #{ Reservation.all.length } flight reservations: "
puts Reservation.pluck(:user_id).join(', ')
