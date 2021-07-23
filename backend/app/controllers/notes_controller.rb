class NotesController < ApplicationController

  def index
    notes = Note.all
    render json: notes, only: [:id, :title, :body], include: {tags: {only: [:id, :name]}}
  end

  def create
    byebug
  end

  def destroy

  end

  private
  def note_params
    params.require(:note).permit(:title, :body, :tags => {})
  end

end
