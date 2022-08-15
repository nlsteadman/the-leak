class LocationTypeSerializer < ActiveModel::Serializer
  attributes :id, :org

  has_many :locations

end
