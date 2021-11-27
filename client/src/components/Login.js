import { useState} from "react"
import UserLogin from "./UserLogin"
import DriverLogin from "./DriverLogin"

function Login({ setCurrentUser, setCurrentDriver }) {
  const [userClicked, setUserClicked] = useState(false)
  const [driverClicked, setDriverClicked] = useState(false)

  const onUserClick = () => {
    setUserClicked(!userClicked)
  }

  const onDriverClick = () => {
    setDriverClicked(!driverClicked)
  }

  return (
    <div>
      <button onClick={onUserClick}>For Users</button>
      <button onClick={onDriverClick}>For Drivers</button>
      {!userClicked ? <UserLogin setCurrentUser={setCurrentUser}/> : null}
      {!driverClicked ? <DriverLogin setCurrentDriver={setCurrentDriver}/> : null}
    </div>
  )
}

export default Login