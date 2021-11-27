function DriverCard({ driver }) {

  return(
    <div>
      <h3>{driver.name} {driver.avg_rating === "NaN" ? "(Not Yet Rated)" : "★".repeat(Math.round(parseFloat(driver.avg_rating))) + "☆".repeat(5 - Math.round(parseFloat(driver.avg_rating)))}</h3>
      <img src={driver.image} alt={driver.name} />
      <p>Car: {driver.car_type}</p>
      <p>Available Services: </p>
      {driver.available_services.map(service =>
        <li key={service}>{service}</li>
      )}
      <button>Request Pickup</button>
    </div>
  )
}

export default DriverCard
