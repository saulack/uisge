# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  session_token   :string           not null
#

class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness: true
  validates :session_token, presence: true
  validates :password_digest, presence: true, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true }


  attr_reader :password
  before_save :ensure_picture, :ensure_mural
  after_initialize :ensure_session_token

  has_one_attached :picture
  has_one_attached :mural

  has_many :drinks_added,
  foreign_key: :user_id,
  class_name: :Drink

  has_many :posts,
  foreign_key: :author_id,
  class_name: :Post




  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.base64
  end

  def ensure_picture
    unless self.picture.attached?
      self.picture.attach(io: File.open('app/assets/images/user.jpg'), filename: 'defaultpic.jpg')
    end
  end

  def ensure_mural
      unless self.mural.attached?
        self.mural.attach(io: File.open('app/assets/images/whiskey.jpg'), filename: 'defaultmural.jpg')
    end
  end
end
