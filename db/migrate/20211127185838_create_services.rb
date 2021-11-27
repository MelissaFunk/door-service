class CreateServices < ActiveRecord::Migration[6.1]
  def change
    create_table :services do |t|
      t.boolean :agreed
      t.string :starting_address
      t.string :ending_address
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :driver, null: false, foreign_key: true
      t.string :service_type
      t.integer :rating
      t.integer :price
      t.string :message

      t.timestamps
    end
  end
end
