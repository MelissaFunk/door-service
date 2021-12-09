import { useState } from 'react'

function DriverProfile({ currentDriver }) {
  const [updatedDriver, setUpdatedDriver] = useState(currentDriver)
  const [clicked, setClicked] = useState(false)

  function handleEdit(e) {
    e.preventDefault()
    fetch(`/drivers/${currentDriver.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        name: e.target.name.value, 
        username: e.target.username.value,
        password: e.target.password.value
      })
    })
    .then(res => res.json())
    .then(driver => {
      setUpdatedDriver(driver)
      setClicked(false)
    })
    e.target.reset()
  }

  const onClick = () => {
    setClicked(!clicked)
  }

  const changeInput = (e) => {
    setUpdatedDriver({
      ...updatedDriver,
      [e.target.name]: e.target.value
    })
  }
  
  return(
    <div>
      <h1>My Profile</h1>
      {clicked ?
      <div>
      <form onSubmit={e => handleEdit(e)}>
        <label><b>Name: </b></label>
        <input type="text" name="name" value={updatedDriver.name} onChange={changeInput}/>
        <br />< br/>
        <label><b>Username: </b></label>
        <input type="text" name="username" value={updatedDriver.username} onChange={changeInput}/>
        <br />< br/>
        <label><b>Password: </b></label>
        <input type="password" name="password" value={updatedDriver.password} onChange={changeInput}/>
        <br />< br/>
        <button>Save</button>
      </form> <br />
      <button onClick={onClick}>Cancel</button>
      </div>
      : 
      <div>
        <label><b>Name: </b>{updatedDriver.name}  </label><br />< br/>
        <label><b>Username: </b>{updatedDriver.username}  </label><br />< br/>
        <label><b>Password: </b>******</label><br />< br/>
        <button onClick={onClick}>Edit Profile</button>
      </div>
      }
    </div>
  )
}

export default DriverProfile