class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  has_many :timers       
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true

  def self.guest
    find_or_create_by!(email: 'guest@example.com', name: 'Guest', birthday: "1990-01-01") do |user|
      user.password = SecureRandom.urlsafe_base64
    end
  end

end
