require 'rails_helper'

feature 'timers', type: :feature do
  let(:user){create(:user)}
  let(:timer){create(:timer)}

  scenario 'timer情報がDBに記録されること' do

    visit new_user_session_path
    fill_in 'user_email', with: user.email
    fill_in 'user_password', with: user.password
    find('input[name="commit"]').click
    expect(current_path).to eq root_path

  
    expect {
      click_link('save')
      expect(current_path).to eq new_tweet_path
      fill_in 'time', with: 200
      fill_in 'wage', with: 2000
      find('input[type="submit"]').click
    }.to change(Timer, :count).by(1)
  end
end
