class ProductLocationSerializer < ActiveModel::Serializer
  attributes :id, :location_id, :product_id

  belongs_to :location
  belongs_to :product
end
