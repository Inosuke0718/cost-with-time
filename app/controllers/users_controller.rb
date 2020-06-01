class UsersController < ApplicationController
  before_action :authenticate_user!, only: [:show]

  def show
    @timers = Timer.where(user_id: current_user.id)
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :birthday)
  end


end
