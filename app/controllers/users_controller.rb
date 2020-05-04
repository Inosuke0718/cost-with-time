class UsersController < ApplicationController

  def edit
  end

  def index
    # @user = User.all
  end



  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  # def show
  #   @timers = Timer.all
  # end

  private

  def user_params
    params.require(:user).permit(:name, :email, :age)
  end


end
