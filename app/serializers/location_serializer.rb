class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :hours, :location_type_id

  belongs_to :location_type
  has_many :product_locations
  has_many :products, through: :product_locations
end
