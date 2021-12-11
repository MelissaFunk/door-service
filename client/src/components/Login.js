import { useState} from "react"
import UserLogin from "./UserLogin"
import DriverLogin from "./DriverLogin"

function Login({ setCurrentUser, setCurrentDriver }) {
  const [userClicked, setUserClicked] = useState(true)
  const [driverClicked, setDriverClicked] = useState(false)
  const [userColorChange, setUserColorChange] = useState(true)
  const [driverColorChange, setDriverColorChange] = useState(false)

  const onUserClick = () => {
    setUserClicked(!userClicked)
    setDriverClicked(false)
    setUserColorChange(!userColorChange)
    setDriverColorChange(false)
  }

  const onDriverClick = () => {
    setDriverClicked(!driverClicked)
    setUserClicked(false)
    setDriverColorChange(!driverColorChange)
    setUserColorChange(false)
  }

  const userBackground = userColorChange ? "rgb(74, 74, 74)" : "white"
  const userColor = userColorChange ? "rgb(141, 178, 235)" : "rgb(74, 74, 74)"

  const driverBackground = driverColorChange ? "rgb(74, 74, 74)" : "white"
  const driverColor = driverColorChange ? "rgb(141, 178, 235)" : "rgb(74, 74, 74)"

  return (
    <div className="login">
      <img className="header" src="https://i.imgur.com/CT4xVq8.jpg"/>
      <div className="login-container">
        <img className="logo" src="https://i.imgur.com/DhLN1cW.jpg?2"/>
        <div className="login-buttons">
        <button className="login-button" style={{background: userBackground, color: userColor}} onClick={onUserClick}>For Passengers</button>
        <button className="login-button" style={{background: driverBackground, color: driverColor}} onClick={onDriverClick}>For Drivers</button>
        {userClicked ? <UserLogin setCurrentUser={setCurrentUser}/> : null}
        {driverClicked ? <DriverLogin setCurrentDriver={setCurrentDriver}/> : null }
        </div>
      </div>
    </div>
  )
}

export default Login