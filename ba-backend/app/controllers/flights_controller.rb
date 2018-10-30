class FlightsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def new
    @flight = Flight.new
  end

  def create
    Flight.create(flight_params)
    redirect_to
  end

  def index
    # @flight = Flight.all
    render json: Flight.all
  end

  def show
    @flight = Flight.find params[:id]
  end

  def update
    @flight = Flight.find params[:id]
    @flight.save

    if @flight.update(flight_params)
      redirect_to( flight_path( @flight.id ) )
    else
      flash[:errors] = @flight.errors.full_messages
      render :edit
    end
  end

  def edit
    @flight = Flight.find params[:id]
  end

  def destroy
    flight = Flight.find params[:id]
    flight.destroy
    redirect_to flights_path
  end

  private
  def flight_params
    params.require(:flight).permit(:flight_no, :date, :origin, :destination, :airplane_id)
  end
end
