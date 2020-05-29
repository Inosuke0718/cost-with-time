class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  has_many :timers       
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true

  def self.guest
    find_or_create_by!(email: 'guest@example.com', name: 'test_account', birthday: "1990-01-01") do |user|
      user.password = SecureRandom.urlsafe_base64
      # user.confirmed_at = Time.now  # Confirmable を使用している場合は必要
    end
  end

end
