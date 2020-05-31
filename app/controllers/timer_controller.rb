class TimerController < ApplicationController

  def index
    if user_signed_in?
      @whosLimit = "#{current_user.name} " + "'s life limit"
      @user = User.find(current_user.id)
      deadDay = (@user.birthday.year + 80) * 365 + @user.birthday.month * 30 + @user.birthday.day
      nowDay = Time.new.year * 365 + Time.new.month * 30 + Time.new.day
      @lifeTimeMnt = (deadDay - nowDay) / 30
      @lifeTimeDay = deadDay - nowDay
      @lifeTimeHour = deadDay * 24 - (nowDay * 24 + Time.new.hour)
      @lifeTimeSec = deadDay * 24 * 3600 - (nowDay * 24 * 3600  + Time.new.hour * 3600 + Time.new.min * 60  + Time.new.sec)
    else
      @whosLimit = "life limit for 30 years old person"
      @lifeTimeMnt = 50 * 12
      @lifeTimeDay = 50 * 365
      @lifeTimeHour = 50 * 365 * 24
      @lifeTimeSec = 50 * 365 * 24 * 3600
    end
  end

  def show
    @timers = Timer.all
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
