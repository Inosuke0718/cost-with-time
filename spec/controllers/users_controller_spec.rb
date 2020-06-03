require 'rails_helper'

describe UsersController, type: :controller do

  let(:user){create(:user)}
  let(:timer){create(:timer)}

  describe '#show' do

    context 'ログインしている場合' do
      before do
        login user
        get :show, params: { user_id: user.id }
      end

      it '@timerに期待した値が入っていること' do
        expect(assigns(:timers)).to eq @timers
      end

      it "show.html.erbに遷移すること" do
        expect(response).to render_template :show
      end
    end




  end



end

