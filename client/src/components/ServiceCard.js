function ServiceCard({ service }) {

  return(
    <div>
    <img src={service.driver_image} alt={service.driver}/>
    <p>Driver: {service.driver}</p>
    <p>Car Type: {service.car_type}</p>
    <p>License Plate: {service.license_plate}</p>
    <p>Starting address: {service.starting_address}</p>
    <p>Ending address: {service.ending_address}</p>
    <p>Message: {service.message}</p>
  </div>
  )
}

export default ServiceCard