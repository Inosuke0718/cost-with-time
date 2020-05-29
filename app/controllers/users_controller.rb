class UsersController < ApplicationController

  # def new_guest
  #   user = User.find_or_create_by!(email: 'guest@example.com',name: 'test_account', age: "28") do |user|
  #     user.password = SecureRandom.urlsafe_base64
  #     # user.confirmed_at = Time.now  # Confirmable を使用している場合は必要
  #   end
  #   sign_in user
  #   redirect_to root_path, notice: 'ゲストユーザーとしてログインしました。'
  # end

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

  private

  def user_params
    params.require(:user).permit(:name, :email, :birthday)
  end


end
