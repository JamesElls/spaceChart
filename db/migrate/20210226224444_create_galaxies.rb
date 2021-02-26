class CreateGalaxies < ActiveRecord::Migration[6.1]
  def change
    create_table :galaxies do |t|
      t.string :name
      t.string :foundBy
      t.integer :lightYears

      t.timestamps
    end
  end
end
