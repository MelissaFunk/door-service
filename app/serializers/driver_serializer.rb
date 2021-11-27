class DriverSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest, :car_type, :license_plate
end
