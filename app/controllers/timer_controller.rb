class TimerController < ApplicationController
  def index
  end

  def show
    @timers = Timer.all
  end

  def create  
    # binding.pry
    @timer = Timer.create(timer_params)
    respond_to do |format|
      format.html { redirect_to timer_new_path  }
      format.json
    end

    # @timer = Timer.new
    # Timer.create(timer_params)
    # binding.pry
    # redirect_to root_path
  end

 
  # def update
  #   Timer.create(timer_params)
  # end 

  private
  def timer_params
    params.require(:timer).permit(:money, :time, :wage, :people).merge(user_id: current_user.id)
  
  end

end
