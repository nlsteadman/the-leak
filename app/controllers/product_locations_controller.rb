class ProductLocationsController < ApplicationController
  skip_before_action :authorized, only: [:index, :show]
  before_action :set_product_location, only: %i[ show update destroy ]

  # GET /product_locations
  def index
    @product_locations = ProductLocation.all

    render json: @product_locations, include: [:location, :product]
  end

  # GET /product_locations/1
  def show
    render json: @product_location
  end

  # POST /product_locations
  def create
    @product_location = ProductLocation.new(product_location_params)

    if @product_location.save
      render json: @product_location, status: :created, location: @product_location
    else
      render json: @product_location.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /product_locations/1
  def update
    if @product_location.update(product_location_params)
      render json: @product_location
    else
      render json: @product_location.errors, status: :unprocessable_entity
    end
  end

  # DELETE /product_locations/1
  def destroy
    @product_location.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product_location
      @product_location = ProductLocation.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def product_location_params
      params.require(:product_location).permit(:location_id, :product_id)
    end
end
