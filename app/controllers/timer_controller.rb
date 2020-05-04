class TimerController < ApplicationController
  def index
    # @timers = Timer.all
  end

  def show
    @timers = Timer.all
    # respond_to do |format|
    #   format.html { redirect_to timer_path  }
    #   format.json
    # end
  end

  def create  
    @timer = Timer.create(timer_params)
    respond_to do |format|
      format.html { redirect_to timer_new_path  }
      format.json
    end

  end

  def edit
    @timers = Timer.all
    respond_to do |format|
      format.html  { redirect_to timer_new_path  }
      format.json
    end
  end


  private

  def timer_params
    params.require(:timer).permit(:money, :time, :wage, :people).merge(user_id: current_user.id)
  
  end

end
