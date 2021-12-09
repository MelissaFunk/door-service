import { useState} from "react"
import { useHistory } from "react-router-dom"

function DriverLogin({ setCurrentDriver }) {
  const [userLog, setUserLog] = useState('')
  const [passLog, setPassLog] = useState('')
  const [nameSign, setNameSign] = useState('')
  const [userSign, setUserSign] = useState('')
  const [passSign, setPassSign] = useState('')
  const [carType, setCarType] = useState('')
  const [licensePlate, setLicensePlate] = useState('')
  const [disabilityIsChecked, setDisabilityIsChecked] = useState(false)
  const [disability, setDisability] = useState('')
  const [petsIsChecked, setPetsIsChecked] = useState(false)
  const [pets, setPets] = useState('')
  const [haulingIsChecked, setHaulingIsChecked] = useState(false)
  const [hauling, setHauling] = useState('')
  const [errors, setErrors] = useState([])
  const history = useHistory()
 
  function onSignupSubmit(e) {
    e.preventDefault()

    const driver = { name: nameSign, username: userSign, password: passSign, car_type: carType, license_plate: licensePlate, service_types: [disability, pets, hauling].join(", ")}
  
    fetch('/drivers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(driver)
    })
    .then(res => {
      if(res.ok) {
        res.json().then(driver => {
          setCurrentDriver(driver)
          history.push('/my-requests')
        })
      } else {
        res.json().then(errorData => setErrors(errorData.errors))
      } 
    })
  }

  function onLoginSubmit(e) {
    e.preventDefault()
    const driver = { username: userLog, password: passLog}

    fetch('/driver-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(driver)
    })
    .then(res => {
      if(res.ok) {
        res.json().then(driver => {
          setCurrentDriver(driver)
          history.push('/my-requests')
        })
      } else {
        res.json().then(errorData => setErrors(errorData.errors))
      } 
    })
  }

  const handleDisabilityChecked = (e) => {
    setDisabilityIsChecked(!disabilityIsChecked)
    setDisability(e.target.value)
  }

  const handlePetsChecked = (e) => {
    setPetsIsChecked(!petsIsChecked)
    setPets(e.target.value)
  }

  const handleHaulingChecked = (e) => {
    setHaulingIsChecked(!haulingIsChecked)
    setHauling(e.target.value)
  }

  return (
    <div>
      <div>
        <form onSubmit={onLoginSubmit}>
          <input placeholder=" Username" type="text" value={userLog} onChange={e => setUserLog(e.target.value)}></input>
          <input placeholder=" Password"type="password" value={passLog} onChange={e => setPassLog(e.target.value)}></input>
          <button type="submit">Login</button>
        </form>
      </div>

      <div>
        <form onSubmit={onSignupSubmit}>
          <input placeholder=" First and Last Name"type="text" value={nameSign} onChange={e => setNameSign(e.target.value)}></input>
          <input placeholder=" Username" type="text" value={userSign} onChange={e => setUserSign(e.target.value)}></input>
          <input placeholder=" Password" type="password" value={passSign} onChange={e => setPassSign(e.target.value)}></input>
          <input placeholder=" Car Type" type="text" value={carType} onChange={e => setCarType(e.target.value)}></input>
          <input placeholder=" License Plate" type="text" value={licensePlate} onChange={e => setLicensePlate(e.target.value)}></input>
          <input type="checkbox" value="Disability Support" checked={disabilityIsChecked} onChange={e => handleDisabilityChecked(e)}/>Disability Support
          <input type="checkbox" value="Hauling" checked={haulingIsChecked} onChange={e => handleHaulingChecked(e)}/>Hauling
          <input type="checkbox" value="Pets" checked={petsIsChecked} onChange={e => handlePetsChecked(e)}/>Pets
          <button type="submit">Signup</button>
        </form>
      </div>

      <div>
        {errors ? errors.map(error => (<p key={error}>{error}</p>)) : null}
      </div>
    </div>
  )
}

export default DriverLogin