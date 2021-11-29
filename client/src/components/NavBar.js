import { Link } from "react-router-dom"
import Logout from './Logout'
import { useHistory } from "react-router"
import { useState } from "react"

function NavBar({ currentUser, currentDriver, setCurrentUser, setCurrentDriver }) {
  const [buttonPopup, setButtonPopup] = useState(false)
  const history = useHistory()

  const handleUserLogout = () => {
      fetch("/user-logout" , {
          method: "DELETE"
      })
      .then(resp => {
          if (resp.ok) {
              setCurrentUser({})
              history.push("/")
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
              history.push("/")
          }
      })
    }

  return(
    <div>
      {currentUser.name ? <img src={currentUser.image} alt={currentUser.name}/> : null}
      {currentDriver.name ? <img src={currentDriver.image} alt={currentDriver.name}/> : null}
      {currentUser.name ? <Link to ="/all-drivers"><button>Drivers</button></Link> : null}
      {currentUser.name ? <Link to="/my-services"><button>Services</button></Link> : null}
      <Link to ="/profile"><button>Profile</button></Link>
      <button onClick={() => setButtonPopup(true)}>Logout</button>
      <Logout trigger={buttonPopup} setTrigger={setButtonPopup} handleLogout={currentUser.name ? handleUserLogout : handleDriverLogout}></Logout>
    </div>
  )
}

export default NavBar