class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable,
         :registerable,
         :recoverable,
         :rememberable,
         :validatable

  # validates :name, uniqueness: true, length: { minimum: 3 }
  before_save :default_values
  has_one_attached :profile_picture

  has_many :musics, dependent: :destroy
  has_many :exercises, dependent: :destroy
  has_many :reviews, dependent: :destroy

  def self.guest
    find_or_create_by!(email: 'hiromi@lickwars.com') do |user|
      user.password = 123456
      user.password_confirmation = user.password
    end
  end

  def default_values
    self.name ||= self.email[...self.email.index('@')]
  end

  def teacher?
    # /!\ needs to be updated once the exercises model exists
    return false
    # !user.exercises.empty?
  end
end
