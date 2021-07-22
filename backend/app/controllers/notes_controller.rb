class NotesController < ApplicationController

  def index
    @notes = Note.all
    render :json => @notes, only: [:id, :title, :body], include: :tags
  end

  def create

  end

  def destroy

  end

  private
  # def note_params(params)
  #   params.require(note).permit()
  # end

end
