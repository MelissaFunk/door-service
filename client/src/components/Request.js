import { useState } from 'react'
 
function Request({ trigger, setTrigger, driver, currentUser }) {
  const [clicked, setClicked] = useState(false)

  const handleRequestSubmit = (e) => {
    e.preventDefault()
    fetch('/services', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        status: "Pending",
        starting_address: e.target.starting_address.value,
        ending_address: e.target.ending_address.value,
        service_type: e.target.service_type.value,
        message: e.target.message.value,
        driver_id: driver.id,
        user_id: currentUser.id,
        date: e.target.date.value,
        time: e.target.time.value
      })
    })
    .then(res => res.json())
    .then(service => console.log(service))
    e.target.reset()
  }

  const handleClick = () => {
    setClicked(!clicked)
  }

  return( trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => {
          setTrigger(false)
          setClicked(false)
        }}>X</button>
        <h2>Request {driver.name}</h2>
        <form className="request-form" onSubmit={e => handleRequestSubmit(e)}>
          <select className="request-select" name="service_type">
            {driver.service_types.includes("Disability Support") ? <option value="Disability Support">Disability Support</option> : null}
            {driver.service_types.includes("Hauling") ? <option value="Hauling">Hauling</option> : null}
            {driver.service_types.includes("Pets") ? <option value="Pets">Pets</option> : null}
          </select>
          <input className="request-input" type="text" name="starting_address" placeholder="Starting Address"></input>
          <input className="request-input" type="text" name="ending_address" placeholder="Ending Address"></input>
          <input className="request-input" type="date" name="date"></input>
          <input className="request-input" type="time" name="time"></input>
          <textarea className="request-message" name="message" placeholder="Message"></textarea>
          <button className="request-button" onClick={handleClick}>Send Request</button>
        </form>
        {clicked ? <p>Thank you for your request! Your driver will accept your request shortly in your <a href="my-services">current services</a>.</p> : null}
      </div>
    </div>
  ) : null
  )
}

export default Request