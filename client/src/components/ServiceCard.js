function ServiceCard({ service }) {

  const handleRating = (e) => {
    fetch(`/services/${service.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        rating: e.target.value,
        status: "Completed"
      })
    })
    .then(res => res.json())
    .then(res => console.log(res))
  }

  return(
    <div>
    <img src={service.driver_image} alt={service.driver}/>
    <p>Driver: {service.driver}</p>
    <p>Car Type: {service.car_type}</p>
    <p>License Plate: {service.license_plate}</p>
    <p>Starting address: {service.starting_address}</p>
    <p>Ending address: {service.ending_address}</p>
    <p>Message: {service.message}</p>
    {service.price ? <p>Price: ${service.price}</p> : null}
    {service.rating ? <p>Rating: {service.rating}</p> : null}
    {service.price ? 
      <div>
      <label>Rate Service: </label>
      <select name="rating" onChange={e => handleRating(e)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      </div>
    : null}
  </div>
  )
}

export default ServiceCard