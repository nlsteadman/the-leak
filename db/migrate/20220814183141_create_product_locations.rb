class CreateProductLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :product_locations do |t|
      t.integer :location_id
      t.integer :product_id

      t.timestamps
    end
  end
end
