class CreateTagNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :tag_notes do |t|
      t.integer :note_id
      t.integer :tag_id
      t.timestamps
    end
  end
end
