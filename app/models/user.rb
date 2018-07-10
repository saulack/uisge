class User < ApplicationRecord
  validates :username, :password_digest, :email, presence: true, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true }

  attr_reader :password
end
