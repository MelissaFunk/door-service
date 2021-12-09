import { Link } from "react-router-dom"

function ProfileImage({ trigger, setTrigger }) {


  return (trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setTrigger(false)}>X</button>
        <h1>Add Your Profile Image</h1>
        <input type="file"/>
        <Link to="/all-drivers"><button className="create-btn">Upload</button></Link>
      </div>
    </div>
  ): null )
}
 
export default ProfileImage