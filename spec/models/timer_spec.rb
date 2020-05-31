require 'rails_helper'

RSpec.describe Timer do

  let(:user){create(:user)}
  let(:timer){create(:timer)}

  describe '#create' do

    it "全て揃っている時保存できる" do
      timer = build(:timer, user_id: user.id)
      expect(timer).to be_valid
    end

    it "ユーザーidが空だと出品できない" do
      timer = build(:timer, user_id: "")
      timer.valid?
      expect(timer.errors[:user_id]).to include()
    end

    it "Timeが空だと出品できない" do
      timer = build(:timer, time: "")
      timer.valid?
      expect(timer.errors[:time]).to include()
    end

  end
end

