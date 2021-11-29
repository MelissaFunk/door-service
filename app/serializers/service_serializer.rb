class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :agreed, :starting_address, :ending_address, :user_id, :driver_id, :service_type, :rating, :price, :message, :driver, :car_type, :license_plate, :driver_image, :rated

  def driver
    self.object.driver.name
  end

  def car_type
    self.object.driver.car_type
  end

  def license_plate
    self.object.driver.license_plate
  end

  def driver_image
    self.object.driver.image
  end

end
