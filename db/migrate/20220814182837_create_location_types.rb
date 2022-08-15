class CreateLocationTypes < ActiveRecord::Migration[7.0]
  def change
    create_table :location_types do |t|
      t.string :org

      t.timestamps
    end
  end
end
