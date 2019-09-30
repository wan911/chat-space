class GroupsController < ApplicationController
  def new
  end

  def create(params_group)
  end

  def edit
  end

  def update
  end

  private

  def params_group
    params.reqire(:group).permit(:name)
  end
end
