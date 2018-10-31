class AirplanesController < ApplicationController

  skip_before_action :verify_authenticity_token

  def new
    @airplane = Airplane.new
  end

  def create
    Airplane.create(airplane_params)
    redirect_to
  end

  def index
    # @airplanes = Airplane.all
    render json: Airplane.all
  end

  def show
    @airplane = Airplane.find params[:id]
  end

  def update
    @airplane = Airplane.find params[:id]
    @airplane.save

    if @airplane.update(airplane_params)
      redirect_to( airplane_path( @airplane.id ) )
    else
      flash[:errors] = @airplane.errors.full_messages
      render :edit
    end
  end

  def edit
    @airplane = Airplane.find params[:id]
  end

  def destroy
    airplane = Airplane.find params[:id]
    airplane.destroy
    redirect_to airplanes_path
  end

  private
  def airplane_params
    params.require(:airplane).permit(:name, :rows, :columns)
  end
end
