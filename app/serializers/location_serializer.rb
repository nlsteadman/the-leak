class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :hours, :image_url, :location_type_id

  belongs_to :location_type
  has_many :product_locations
  has_many :products, through: :product_locations
end
