import { useState} from "react"
import { useHistory } from "react-router-dom"

function DriverLogin({ setCurrentDriver }) {
  const [userLog, setUserLog] = useState('')
  const [passLog, setPassLog] = useState('')
  const [nameSign, setNameSign] = useState('')
  const [userSign, setUserSign] = useState('')
  const [passSign, setPassSign] = useState('')
  const [imageSign, setImageSign] = useState('')
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

    const driver = { name: nameSign, username: userSign, password: passSign, car_type: carType, license_plate: licensePlate, service_types: [disability, pets, hauling].join(", "), image: imageSign}
  
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

  const handleImageInput = (e) => {
    let files = e.target.files
    let reader = new FileReader()
    reader.readAsDataURL(files[0])
    reader.onload = (e) => {
      setImageSign(e.target.result)
    }
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
        {errors ? errors.map(error => (<p key={error}>{error}</p>)) : null}
      </div>
      <div className="user-login-container">
        <form className="user-login-form"onSubmit={onLoginSubmit}>
          <input className="user-signup-input" placeholder=" Username" type="text" value={userLog} onChange={e => setUserLog(e.target.value)}></input>
          <input className="user-signup-input" placeholder=" Password"type="password" value={passLog} onChange={e => setPassLog(e.target.value)}></input>
          <button type="submit">Login</button>
        </form>
      </div>

      <div>
        <form className="user-signup-form" onSubmit={onSignupSubmit}>
          <input className="user-signup-input" placeholder=" First and Last Name"type="text" value={nameSign} onChange={e => setNameSign(e.target.value)}></input>
          <input className="user-signup-input" placeholder=" Username" type="text" value={userSign} onChange={e => setUserSign(e.target.value)}></input>
          <input className="user-signup-input" placeholder=" Password" type="password" value={passSign} onChange={e => setPassSign(e.target.value)}></input>
          <input className="user-signup-input" placeholder=" Car Type" type="text" value={carType} onChange={e => setCarType(e.target.value)}></input>
          <input className="user-signup-input" placeholder=" License Plate" type="text" value={licensePlate} onChange={e => setLicensePlate(e.target.value)}></input>
          <b>Service Options:</b>
          <table>
            <tr>
            <td><input className="checkbox" type="checkbox" value="Disability Support" checked={disabilityIsChecked} onChange={e => handleDisabilityChecked(e)}/></td>
            <td>Disability Support</td>
            <td><input className="checkbox" type="checkbox" value="Hauling" checked={haulingIsChecked} onChange={e => handleHaulingChecked(e)}/></td>
            <td>Hauling</td>
            <td><input className="checkbox" type="checkbox" value="Pets" checked={petsIsChecked} onChange={e => handlePetsChecked(e)}/></td>
            <td>Pets</td>
            </tr>
            <tr></tr>
          </table>
          <label className="profile-label"><b>Profile Image:</b></label>
          <input className="profile-input" type="file" accept="image/*" onChange={e => handleImageInput(e)}/>
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  )
}

export default DriverLogin