class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :agreed, :starting_address, :ending_address, :user_id, :driver_id, :service_type, :rating, :price, :message
end
