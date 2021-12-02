import dateFormat from 'dateformat'

function ServiceCard({ service, onDeleteService }) {

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

  const handleDeleteService = () => {
    fetch(`/services/${service.id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(onDeleteService)
  }

  return(
    <div>
    <img src={service.driver_image} alt={service.driver}/>
    <p>Driver: {service.driver}</p>
    <p>Car Type: {service.car_type}</p>
    <p>License Plate: {service.license_plate}</p>
    <p>Starting address: {service.starting_address}</p>
    <p>Ending address: {service.ending_address}</p>
    <p>Date: {dateFormat(service.date, "UTC:mmmm dS, yyyy")}</p>
    <p>Time: {dateFormat(service.time, "UTC:h:MM TT")}</p>
    <p>Message: {service.message}</p>
    {service.price ? <p>Price: ${service.price}</p> : null}
    {service.status === "Completed" ? <p>Rating: {service.rating}</p> : null}
    {service.status === "Current" ? 
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
    {service.status === "Pending" || service.status === "Current" ? <button onClick={handleDeleteService}>Cancel Service</button> : null}
  </div>
  )
}

export default ServiceCard