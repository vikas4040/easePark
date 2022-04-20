import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../config'
import { FiArrowLeft } from 'react-icons/fi';
import Profile from './../Profile/index';
import NavBar from "../../component/NavBar"
import './styles.css';
import Footer from '../../component/Footer'

// import Footer from '../../component/footer';
const UpdateProfile = () => {
  const [id, setID] = useState(sessionStorage.getItem("id"));
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNo, setphoneNo] = useState('')

  const navigate = useNavigate()

  const updateprofile = () => {
    // if (email.length == 0) {
    //   toast.warning('please enter your New emal')
    // }
    if (email.length == 0) {
      toast.warning('please enter your New email ')
  }
      else if (phoneNo.length == 0) {
        toast.warning('please enter your New Mobile Number')
    }else if (password.length == 0) {
      toast.warning('please enter your New Password')
  }
    
    else {
      const body = {
        email,
        password,
        phoneNo,
      }

      // url to make updateprofile api call
      const url = `${URL}/user/updateprofile/ ${id}`

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Profile Updated')

          // get the data sent by server
          const { email, password, phoneNumber } = result['data']

          // persist the logged in user's information for future use
         // sessionStorage['email'] = email
          // sessionStorage['password'] = password
          sessionStorage['phoneNumber'] = phoneNumber

          // navigate to home component
          navigate('/Profile')
        } else {
          toast.error('Data not get updated')
        }
      })
    }
  }

  return (
    <div>
     <NavBar />
      
      <br></br>
      <h1>Update Profile</h1>
      <br></br>
      <div className="edit-profile-container ">

<div className="edit-profile-content">
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Email address
              </label>
              <input
              value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type="text"
                className="form-control"
                required = {true} 
               // readOnly = {true}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
              Password
              </label>
              <input
              placeholder='*********'
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                type="password"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
             Mobile Number
              </label>
              <input
                onChange={(e) => {
                    setphoneNo(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>
           
            <div className="mb-3">
              <button onClick={updateprofile} className="btn btn-primary">
                Update Profile  
              </button>
              <br></br>
              <br></br>
              <div>
              <Link to="/home">
            <FiArrowLeft size={16} color="#e02041"/>
           Go Home
          </Link>

                 <Link to="/Profile">
               <FiArrowLeft size={16} color="#e02041"/>
                 Go back</Link>
              </div>
              <br></br>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
    </div>
    <div className="row"> <Footer/></div>

    </div>
  )
}

export default UpdateProfile