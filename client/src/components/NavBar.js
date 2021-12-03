import { Link } from "react-router-dom"
import { useState } from "react"
import Logout from './Logout'

function NavBar({ currentUser, currentDriver, setCurrentUser, setCurrentDriver }) {
  const [buttonPopup, setButtonPopup] = useState(false)

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
    <div>
      {currentUser.image ? <img src={currentUser.image} alt={currentUser.name}/> : null}
      {currentDriver.image ? <img src={currentDriver.image} alt={currentDriver.name}/> : null}
      {currentUser.name ? <Link to ="/all-drivers"><button>Drivers</button></Link> : null}
      {currentUser.name ? <Link to="/my-services"><button>Services</button></Link> : null}
      {currentDriver.name ? <Link to="/my-requests"><button>Requests</button></Link> : null}
      {currentUser.name ? <Link to ="/user-profile"><button>Profile</button></Link> : null}
      {currentDriver.name ? <Link to ="/driver-profile"><button>Profile</button></Link> : null}
      <button onClick={() => setButtonPopup(true)}>Logout</button>
      <Logout trigger={buttonPopup} setTrigger={setButtonPopup} handleLogout={currentUser.name ? handleUserLogout : handleDriverLogout}></Logout>
    </div>
  )
}

export default NavBar