class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :content
      t.integer :user_id
      t.integer :location_id

      t.timestamps
    end
  end
end
