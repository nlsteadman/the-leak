class LocationTypesController < ApplicationController
  before_action :set_location_type, only: %i[ show update destroy ]

  # GET /location_types
  def index
    @location_types = LocationType.all

    render json: @location_types
  end

  # GET /location_types/1
  def show
    render json: @location_type
  end

  # POST /location_types
  def create
    @location_type = LocationType.new(location_type_params)

    if @location_type.save
      render json: @location_type, status: :created, location: @location_type
    else
      render json: @location_type.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /location_types/1
  def update
    if @location_type.update(location_type_params)
      render json: @location_type
    else
      render json: @location_type.errors, status: :unprocessable_entity
    end
  end

  # DELETE /location_types/1
  def destroy
    @location_type.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_location_type
      @location_type = LocationType.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def location_type_params
      params.require(:location_type).permit(:type)
    end
end
