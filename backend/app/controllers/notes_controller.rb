class NotesController < ApplicationController

  def index
    notes = Note.all
    render json: notes, only: [:id, :title, :body], include: {tags: {only: [:id, :name]}}
  end

  def create
    note = Note.create(note_params)
    render json: note, only: [:id, :title, :body]
  end

  def destroy
    note = Note.find_by_id(params[:id])
    note.destroy
  end

  private
  def note_params
    params.require(:note).permit(:title, :body)
  end

end
