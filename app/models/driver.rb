class Driver < ApplicationRecord
  has_many :services

  has_secure_password

  validates :username, :password, presence: true
  validates :username, uniqueness: true
end
