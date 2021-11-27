class User < ApplicationRecord
  has_many :services
  has_many :drivers, through: :services

  has_secure_password

  validates :username, :password, presence: true
  validates :username, uniqueness: true
end
