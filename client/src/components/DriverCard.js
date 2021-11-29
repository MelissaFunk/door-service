import { useState } from "react"
import Request from "./Request"

function DriverCard({ driver, currentUser }) {
  const [buttonPopup, setButtonPopup] = useState(false)

  return(
    <div>
      <h2>{driver.name} {driver.avg_rating === "NaN" ? "(Not Yet Rated)" : "★".repeat(Math.round(parseFloat(driver.avg_rating))) + "☆".repeat(5 - Math.round(parseFloat(driver.avg_rating)))}</h2>
      <img src={driver.image} alt={driver.name} />
      <p>Car: {driver.car_type}</p>
      <p>Available Services: </p>
      {driver.service_types.split(",").map(service =>
        <li key={service}>{service}</li>  
      )}
      <button onClick={() => setButtonPopup(true)}>Request Driver</button>
      <Request trigger={buttonPopup} setTrigger={setButtonPopup} driver={driver} currentUser={currentUser}/>
    </div>
  )
}

export default DriverCard
