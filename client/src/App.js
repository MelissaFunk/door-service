import { Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Drivers from './components/Drivers'
import Services from './components/Services'

function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [currentDriver, setCurrentDriver] = useState({})

  useEffect(() => {
    fetch('/user-auth')
    .then(res => {
      if(res.ok) {
        res.json().then(user => setCurrentUser(user))
      }
    })
  }, [])

  useEffect(() => {
    fetch('/driver-auth')
    .then(res => {
      if(res.ok) {
        res.json().then(driver => setCurrentDriver(driver))
      }
    })
  }, [])
  

  return (
    <div>
      {currentUser.name || currentDriver.name ? <NavBar /> : null}
      <Switch>
        <Route exact path="/"><Login setCurrentUser={setCurrentUser} setCurrentDriver={setCurrentDriver}/></Route>
        <Route exact path="/all-drivers"><Drivers /></Route>
        <Route exact path="/my-services"><Services /></Route>
      </Switch>
    </div>
  );
}

export default App;
