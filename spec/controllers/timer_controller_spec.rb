require 'rails_helper'

describe TimerController, type: :controller do

  let(:user){create(:user)}
  let(:timer){create(:timer)}

  describe 'GET #new' do
    it "new.html.erbに遷移すること" do
      get :new
      expect(response).to render_template :new
    end

  end

  describe 'GET #show' do
    it "show.html.erbに遷移すること" do
      get :show, params: {  id: 1 }
      expect(response).to render_template :show
    end

    it "@timersに正しい値が入っていること" do
      timers = build(:timer, user_id: user.id)
      get :show, params: { id: timer }
      expect(assigns(:timers)).to eq timer
    end

  #   it "@timersに正しい値が入っていること" do
  #     expect(assigns(:timers)).to be_a_new(Timer)
  #   end

  # end

  describe 'GET #index' do
    it "index.html.erbに遷移すること" do
      timers = build(:timer, user_id: user.id)
      get :index, params: { id: 1 }
      expect(response).to render_template :show
    end

    it "@tweetに正しい値が入っていること" do
    end

    it "index.html.erbに遷移すること" do
    end

  end

end