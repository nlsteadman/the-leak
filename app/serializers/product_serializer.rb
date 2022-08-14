class ProductSerializer < ActiveModel::Serializer
  attributes :id, :type

  has_many :product_locations
  has_many :locations, through: :product_locations
end
