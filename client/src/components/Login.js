import { useState} from "react"
import UserLogin from "./UserLogin"
import DriverLogin from "./DriverLogin"

function Login({ setCurrentUser, setCurrentDriver }) {
  const [userClicked, setUserClicked] = useState(false)
  const [driverClicked, setDriverClicked] = useState(false)
  const [userColorChange, setUserColorChange] = useState(false)
  const [driverColorChange, setDriverColorChange] = useState(false)

  const onUserClick = () => {
    setUserClicked(!userClicked)
    setDriverClicked(false)
    setUserColorChange(userColorChange => !userColorChange)
    setDriverColorChange(false)
  }

  const onDriverClick = () => {
    setDriverClicked(!driverClicked)
    setUserClicked(false)
    setDriverColorChange(driverColorChange => !driverColorChange)
    setUserColorChange(false)
  }

  const userBackground = userColorChange ? "rgb(74, 74, 74)" : "white"
  const userColor = userColorChange ? "rgb(141, 178, 235)" : "rgb(74, 74, 74)"

  const driverBackground = driverColorChange ? "rgb(74, 74, 74)" : "white"
  const driverColor = driverColorChange ? "rgb(141, 178, 235)" : "rgb(74, 74, 74)"

  return (
    <div className="login">
      <h1>DOOR SERVICE</h1>
      <h3><i>specialized driving services to support your needs</i></h3>
      <div className="login-container">
        <img src="https://i.imgur.com/DhLN1cW.jpg?2"/>
        <div className="login-form">
        <button className="login-form-button" style={{background: userBackground, color: userColor}} onClick={onUserClick}>For Passengers</button>
        <button className="login-form-button" style={{background: driverBackground, color: driverColor}} onClick={onDriverClick}>For Drivers</button>
        {userClicked ? <UserLogin setCurrentUser={setCurrentUser}/> : null}
        {driverClicked ? <DriverLogin setCurrentDriver={setCurrentDriver}/> : null }
        </div>
      </div>
    </div>
  )
}

export default Login