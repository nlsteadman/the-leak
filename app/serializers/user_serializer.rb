class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest

  has_many :reviews
  has_many :locations, through: :reviews
end
