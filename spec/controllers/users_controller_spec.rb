require 'rails_helper'

describe UsersController, type: :controller do

  let(:user){create(:user)}
  let(:timer){create(:timer)}

  describe '#show' do

    context 'ログインしている場合' do
      before do
        login user
        get :show, params: { id: user.id }
      end

      it '@timerに期待した値が入っていること' do
        expect(assigns(:timer)).to eq @timers
      end

      it "show.html.erbに遷移すること" do
        expect(response).to render_template :show
      end
    end
  end

  describe '#update' do

    context 'ログインしている場合' do
      before do
        login user
        patch :update, params: { id: 1}
      end

      it "root_pathに遷移すること" do
        expect(response).to redirect_to(root_path)
      end
    end
  end
end

