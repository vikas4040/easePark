import { useNavigate } from 'react-router'
import "../Style/profilebutton.css"


const ProfileButton=()=>{

    const { id, firstName, lastName } = sessionStorage
    const navigate = useNavigate()
  
    const logoutUser = () => {
      // remove the logged users details from session storage
      sessionStorage.removeItem('id')
      sessionStorage.removeItem('firstName')
      sessionStorage.removeItem('lastName')
      sessionStorage.removeItem('role')
      sessionStorage.removeItem('email')
  
      // navigate to sign in component
      navigate('/signin')
    }
   
   
    const profile = () => {
      navigate('/profile')
    }

    return(
        <div className='row'>
      <div className='col-sm-4' id='lefthome'>
        <div className="btn-group" role="group">
        <button
          id="btnGroupDrop1"
          type="button"
          className="btn btn-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Welcome {firstName}
        </button>
        <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
        <li>
            <button onClick={profile} className="dropdown-item">
              Your Profile</button>
          </li>
         
          <li>
            <button onClick={logoutUser} className="dropdown-item">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
    </div>
      
    )

}
export default ProfileButton