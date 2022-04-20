import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../config'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  const navigate = useNavigate()

  const forgotpassword = () => {
    if (newPassword.length == 0) {
      toast.warning('please enter your New Password')
    } else if (confirmNewPassword.length == 0) {
        toast.warning('please enter Confirm New Password')
    }  else {
      const body = {
        email,
        newPassword,
        confirmNewPassword,
      }

      // url to make signin api call
      const url = `${URL}/user/forgotpassword`

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Welcome to the application')

          // get the data sent by server
          const { id, firstName, lastName } = result['data']

          // persist the logged in user's information for future use
          sessionStorage['id'] = id
          sessionStorage['firstName'] = firstName
          sessionStorage['lastName'] = lastName

          // navigate to home component
          navigate('/home')
        } else {
          toast.error('Invalid user name or password')
        }
      })
    }
  }

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <h1>Forgot Password</h1>
      <br></br>
     
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Email address
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type="text"
                className="form-control"
                required = {true} 
                readOnly = {true}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
              New Password
              </label>
              <input
                onChange={(e) => {
                  setNewPassword(e.target.value)
                }}
                type="password"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
             Confirm New Password
              </label>
              <input
                onChange={(e) => {
                 setConfirmNewPassword(e.target.value)
                }}
                type="password"
                className="form-control"
              />
            </div>
           
            <div className="mb-3">
              <button onClick={forgotpassword} className="btn btn-primary">
                Change Password  
              </button>
              <br></br>
              <br></br>
              <div>
               after changing password you can signin here  <Link to="/signin">Signin here.</Link>
              </div>
              <br></br>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}

export default ForgotPassword