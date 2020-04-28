class TimerController < ApplicationController
  def index
  end

  def show
    @timers = Timer.all
  end

  def create
    # binding.pry
    # @timer = Timer.new
    # Timer.create(timer_params)
    # redirect_to root_path


   
    @timer = Timer.new
    @timer.save
    Timer.create
    binding.pry
    # redirect_to root_path
  end

 
  # def update
  #   Timer.create(timer_params)
  # end 

  private
  def timer_params
    params.require(:timer).permit(:id, :money, :time, :wage, :people, :created_at)
    binding.pry
  end

end
