class LocationTypeSerializer < ActiveModel::Serializer
  attributes :id, :type

  has_many :locations

end
