class AddRatedtoService < ActiveRecord::Migration[6.1]
  def change
    add_column :services, :rated, :boolean
  end
end
