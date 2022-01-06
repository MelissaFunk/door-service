import { Link } from "react-router-dom"
import { useState } from "react"
import Logout from './Logout'

function NavBar({ currentUser, currentDriver, setCurrentUser, setCurrentDriver }) {
  const [logoutButtonPopup, setLogoutButtonPopup] = useState(false)

  const handleUserLogout = () => {
      fetch("/user-logout" , {
          method: "DELETE"
      })
      .then(resp => {
          if (resp.ok) {
              setCurrentUser({})
          }
      })
    }

    const handleDriverLogout = () => {
      fetch("/driver-logout" , {
          method: "DELETE"
      })
      .then(resp => {
          if (resp.ok) {
              setCurrentDriver({})
          }
      })
    }

  return(
    <div className="navbar">
      {currentUser.image ? <img className="profile-img" src={currentUser.image} alt={currentUser.name}/> : null}
      {currentDriver.image ? <img className="profile-img" src={currentDriver.image} alt={currentDriver.name} /> : null}
      {currentUser.name ? <Link to ="/all-drivers"><button className="navbar-btn">Drivers</button></Link> : null}
      {currentUser.name ? <Link to="/my-services"><button className="navbar-btn">Services</button></Link> : null}
      {currentDriver.name ? <Link to="/my-requests"><button className="navbar-btn">Requests</button></Link> : null}
      {currentUser.name ? <Link to ="/user-profile"><button className="navbar-btn">Profile</button></Link> : null}
      {currentDriver.name ? <Link to ="/driver-profile"><button className="navbar-btn">Profile</button></Link> : null}
      <button className="navbar-btn-logout" onClick={() => setLogoutButtonPopup(true)}>Logout</button>
      <Logout trigger={logoutButtonPopup} setTrigger={setLogoutButtonPopup} handleLogout={currentUser.name ? handleUserLogout : handleDriverLogout}></Logout>
    </div>
  )
}

export default NavBar