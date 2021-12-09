import { useState} from "react"
import { useHistory } from "react-router-dom"
import ProfileImage from "./ProfileImage"

function UserLogin({ setCurrentUser }) {
  const [userLog, setUserLog] = useState('')
  const [passLog, setPassLog] = useState('')
  const [nameSign, setNameSign] = useState('')
  const [userSign, setUserSign] = useState('')
  const [passSign, setPassSign] = useState('')
  const [errors, setErrors] = useState([])
  const [buttonPopup, setButtonPopup] = useState(false)
  const history = useHistory()
 
  function onSignupSubmit(e) {
    e.preventDefault()
    const user = { name: nameSign, username: userSign, password: passSign}
  
    fetch('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    .then(res => {
      if(res.ok) {
        res.json().then(user => {
          setCurrentUser(user)
        })
      } else {
        res.json().then(errorData => setErrors(errorData.errors))
      } 
    })
  }

  function onLoginSubmit(e) {
    e.preventDefault()
    const user = { username: userLog, password: passLog}

    fetch('/user-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    .then(res => {
      if(res.ok) {
        res.json().then(user => {
          setCurrentUser(user)
          history.push('/all-drivers')
        })
      } else {
        res.json().then(errorData => setErrors(errorData.errors))
      } 
    })
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
          <button type="submit" onClick={() => setButtonPopup(true)}>Signup</button>
          <ProfileImage trigger={buttonPopup} setTrigger={setButtonPopup}></ProfileImage>
        </form>
      </div>

      <div>
        {errors ? errors.map(error => (<p key={error}>{error}</p>)) : null}
      </div>
    </div>
  )
}

export default UserLogin