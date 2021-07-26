class CreateTags < ActiveRecord::Migration[6.1]
  def change
    create_table :tags do |t|
      t.string :name
      t.integer :note_id

      t.timestamps
    end
  end
end
