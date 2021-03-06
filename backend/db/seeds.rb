# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

5.times do |i|
  note = Note.create(title: "##{i+1} Note", body: "A filler body to the note.")
  note.tags << Tag.create(name: "First tag")
  note.tags << Tag.create(name: "Second tag")
end

