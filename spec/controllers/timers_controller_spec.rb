require 'rails_helper'

describe TimerController, type: :controller do

  let(:user){create(:user)}
  let(:timers){create(:timer)}

  describe 'GET #new' do
    it "new.html.erbに遷移すること" do
      get :new
      expect(response).to render_template :new
    end
  end

  describe '#index' do
    context 'ログインしている場合' do
      before do
        login user
        get :index, params: { user_id: user.id }
      end

      it '@userに期待した値が入っていること' do
        expect(assigns(:user)).to eq user
      end

      it "index.html.erbに遷移すること" do
        expect(response).to render_template :index
      end
    end 

    context 'ログインしていない場合' do
      before do
        get :index, params: { user_id: user.id }
      end

      it '@userに期待した値が入っていること' do
        expect(assigns(:user)).to eq  nil
      end

      it "index.html.erbに遷移すること" do
        expect(response).to render_template :index
      end
    end
  end

  describe '#create' do
    context 'ログインしている場合' do
      before do
        login user
        get :index, params: { user_id: user.id }
      end

      it '@timerに期待した値が入っていること' do
        expect(assigns(:timer)).to eq @timer
      end
    end
  end

    describe '#edit' do
    context 'ログインしている場合' do
      before do
        login user
        get :index, params: { user_id: user.id }
      end

      it '@timerに期待した値が入っていること' do
        expect(assigns(:timer)).to eq @timers
      end
    end
  end
end

