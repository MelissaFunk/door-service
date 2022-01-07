import { useState } from "react"
import Request from "./Request"

function DriverCard({ driver, currentUser }) {
  const [buttonPopup, setButtonPopup] = useState(false)

  return(
    <div className="driver-card">
      <img src={driver.image} alt={driver.name} />
      <h3>{driver.name} {driver.avg_rating === "NaN" ? "(Not Yet Rated)" : "★".repeat(Math.round(parseFloat(driver.avg_rating))) + "☆".repeat(5 - Math.round(parseFloat(driver.avg_rating)))}</h3>
      <div className="driver-details">
        <p><b>Car: </b>{driver.car_type}</p>
        <p><b>Available Services: </b></p>
        {driver.service_types.split(",").map(service =>
          <li key={service}>{service}</li>  
        )}
      </div>
      <button className="request-driver-btn" onClick={() => setButtonPopup(true)}>Request Driver</button>
      <Request trigger={buttonPopup} setTrigger={setButtonPopup} driver={driver} currentUser={currentUser}/>
    </div>
  )
}

export default DriverCard
