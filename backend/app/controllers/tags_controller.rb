class TagsController < ApplicationController

  # def index
  #   @tags = Tag.all
  #   render :json => @tags
  # end

  def create

  end

  def destroy
    tag = Tag.find_by_id(params[:id])
    tag.destroy
  end

  private
  
  # def tag_params

  # end
end
