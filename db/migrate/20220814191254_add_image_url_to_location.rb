class AddImageUrlToLocation < ActiveRecord::Migration[7.0]
  def change
    add_column :locations, :image_url, :string
  end
end
