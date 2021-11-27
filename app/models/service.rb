class Service < ApplicationRecord
  belongs_to :user
  belongs_to :driver

  validates :starting_address, :ending_address, :service_type, presence: true
end
