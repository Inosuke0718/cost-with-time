require 'rails_helper'

RSpec.describe User do

  let(:user){create(:user)}

  describe '#create' do

    it "全て揃っている時保存できる" do
      user = build(:user)
      expect(user).to be_valid
    end

    it "nameが空だと出品できない" do
      user = build(:user, name: nil)
      user.valid?
      expect(user.errors[:name]).to include("can't be blank")
    end

    it "emailが空だと出品できない" do
      user = build(:user, email: nil)
      user.valid?
      expect(user.errors[:email]).to include("can't be blank")
    end

    it "パスワードが空だと出品できない" do
      user = build(:user, password: nil)
      user.valid?
      expect(user.errors[:password]).to include("can't be blank")
    end

    it "パスワードが8文字未満場合は出品できない" do
      user = build(:user, password: "a" * 5)
      user.valid?
      expect(user.errors[:password]).to include("is too short (minimum is 6 characters)")
    end

  end
end

