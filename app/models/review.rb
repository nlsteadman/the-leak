class Review < ApplicationRecord
  belongs_to :user
  belongs_to :location

  validates :user_id, presence: true
  validates :book_id, presence: true
  validates :user_id, uniqueness: {scope: :location_id}
end
