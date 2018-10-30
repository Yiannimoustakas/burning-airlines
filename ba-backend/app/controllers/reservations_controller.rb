class ReservationsController < ApplicationController
  def new
    @reservation = Reservation.new
  end

  def create
    @reservation = Reservation.new(reservation_params)
    @reservation.user = @current_user
    @flights = Flight.all
    @reservation.flights << Flight.find(params[:flights])
    @reservation.save
    # console
    # raise "hell"

    if @reservation.persisted?
        redirect_to reservation_path(@reservation.id)
    else
      flash[:errors] = @reservation.errors.full_messages
      # raise "hell"
      render :new
    end
  end

  def index
    @reservation = Reserevation.all
    render :json Reservation.all
  end

  def show
    @reservation = Reservation.find params[:id]
  end

  def update
    @reservation = Reservation.find params[:id]
    @reservation.flights.destroy_all
    @flights = Flight.all
    @reservation.flights << Flight.find(params[:flights])
    @reservation.save
    # console
    # raise "hell"

    unless @reservation.user == @current_user
      flash[:errors] = @reservation.errors.full_messages
      render :edit
    end

    if @reservation.flights.length == 7
      # @reservation.save
      if @reservation.update(reservation_params)
        redirect_to( reservation_path( @reservation.id ) )
      end
    else
      flash[:errors] = @reservation.errors.full_messages
      render :edit
    end
  end

  def edit
    @reservation = Reservation.find params[:id]
    @flights = Flight.all
  end

  def destroy
    reservation = Reservation.find params[:id]
    reservation.destroy
    redirect_to reservations_path
  end

  private
  def reservation_params
    params.require(:reservations).permit(:user_id, :flight_id, :seat_row, :seat_column)
  end
end
