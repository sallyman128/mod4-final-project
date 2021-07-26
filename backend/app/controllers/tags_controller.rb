class TagsController < ApplicationController

  def create
    tag = Tag.create(tag_params)
    render json: tag, only: [:id, :name, :note_id]
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
