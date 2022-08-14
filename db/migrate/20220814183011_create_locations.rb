class CreateLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :address
      t.string :hours
      t.integer :location_type_id

      t.timestamps
    end
  end
end
