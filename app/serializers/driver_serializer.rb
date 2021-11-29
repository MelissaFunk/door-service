class DriverSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password, :car_type, :license_plate, :image, :service_types, :avg_rating
  
  def avg_rating
    services = self.object.services.select do |serv|
      serv.rating
    end
    ratings = services.map(&:rating)
    ratings.then{ |r| r.sum.to_f / r.size }.to_s
  end

end
