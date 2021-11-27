class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :agree, :starting_address, :ending_address, :lat, :lon
end
