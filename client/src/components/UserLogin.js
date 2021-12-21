import { useState } from "react"
import { useHistory } from "react-router-dom"

function UserLogin({ setCurrentUser }) {
  const [userLog, setUserLog] = useState('')
  const [passLog, setPassLog] = useState('')
  const [nameSign, setNameSign] = useState('')
  const [userSign, setUserSign] = useState('')
  const [passSign, setPassSign] = useState('')
  const [imageSign, setImageSign] = useState('')
  const [errors, setErrors] = useState([])
  const history = useHistory()
 
  function onSignupSubmit(e) {
    e.preventDefault()
    const user = { name: nameSign, username: userSign, password: passSign, image: imageSign}
  
    fetch('/users', {
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

  const handleImageInput = (e) => {
    let files = e.target.files
    let reader = new FileReader()
    reader.readAsDataURL(files[0])
    reader.onload = (e) => {
      setImageSign(e.target.result)
    }
  }

  return (
    <div>
      <div>
        {errors ? errors.map(error => (<p key={error}>{error}</p>)) : null}
      </div>
      <div className="user-login-container">
        <form className="user-login-form" onSubmit={onLoginSubmit}>
          <input placeholder=" Username" type="text" value={userLog} onChange={e => setUserLog(e.target.value)}></input>
          <input placeholder=" Password" type="password" value={passLog} onChange={e => setPassLog(e.target.value)}></input>
          <button type="submit">Login</button>
        </form>
      </div>

      <div>
        <form className="user-signup-form" onSubmit={onSignupSubmit}>
          <input className="user-signup-input" placeholder=" First and Last Name"type="text" value={nameSign} onChange={e => setNameSign(e.target.value)}></input>
          <input className="user-signup-input" placeholder=" Username" type="text" value={userSign} onChange={e => setUserSign(e.target.value)}></input>
          <input className="user-signup-input" placeholder=" Password" type="password" value={passSign} onChange={e => setPassSign(e.target.value)}></input>
          <label className="profile-label"><b>Profile Image:</b></label>
          <input className="profile-input" type="file" accept="image/*" onChange={e => handleImageInput(e)}/>
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  )
}

export default UserLogin