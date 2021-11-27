class AddImageToDriver < ActiveRecord::Migration[6.1]
  def change
    add_column :drivers, :image, :string
  end
end
