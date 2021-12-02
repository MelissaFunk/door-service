import dateFormat from 'dateformat'

function ServiceRequestCard({ service }) {

  const handlePrice = (e) => {
    fetch(`/services/${service.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        price: e.target.price.value,
        status: "Current"
      })
    })
    .then(res => res.json())
    .then(res => console.log(res))
  }

  return(
    <div>
    <img src={service.user_image} alt={service.user}/>
    <p>User: {service.user}</p>
    <p>Starting address: {service.starting_address}</p>
    <p>Ending address: {service.ending_address}</p>
    <p>Date: {dateFormat(service.date, "UTC:mmmm dS, yyyy")}</p>
    <p>Time: {dateFormat(service.time, "UTC:h:MM TT")}</p>
    <p>Message: {service.message}</p>
    {service.price ? <p>Price: ${service.price}</p> : 
    <div>
      <form onSubmit={handlePrice}>
        <label>Price: </label>
        <input type="text" name="price"></input>
        <button>Add</button>
      </form>
    </div>
    }
    {service.rating ? <p>Rating: {service.rating}</p> : null}
  </div>
  )
}

export default ServiceRequestCard