class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :location_id

  belongs_to :user
  belongs_to :location
end
