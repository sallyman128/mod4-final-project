class TagsController < ApplicationController

  def create
    tag = Tag.create(name: tag_params[:note]);
    note = Note.find_by_id(tag_params[:note_id])
    tag.notes << note
    render json: tag, only: [:id, :name]
  end

  def destroy
    tag = Tag.find_by_id(params[:id])
    tag.destroy
  end

  private
  
  def tag_params
    params.require(:tag).permit(:name, :note_id)
  end
end
