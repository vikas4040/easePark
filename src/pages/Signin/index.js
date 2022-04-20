import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../config'
import NavBar from "../../component/NavBar"
import Footer from '../../component/Footer'



const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const signinUser = () => {
    if (email.length == 0) {
      toast.warning('please enter your Email')
    } else if (password.length == 0) {
      toast.warning('please enter your Password')
    } else {
      const body = {
        email,
        password,
      }

      // url to make signin api call
      const url = `${URL}/user/signin`

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Welcome to the application')

          // get the data sent by server
          const { id, firstName, lastName , role, email} = result['data']

          // persist the logged in user's information for future use
          sessionStorage['id'] = id
          sessionStorage['firstName'] = firstName
          sessionStorage['lastName'] = lastName
          sessionStorage['role'] = role
          sessionStorage['email']=email

          if(role=="admin"){
            navigate('/admin')
          }
          else
          {
            navigate('/home')
          }
         
        } else {
          toast.error('Invalid user name or password')
        }
      })
    }
  }

  return (
   
    <div className="container-fluid bg-light  vh-100">
            <NavBar />
      <h1 className="py-5">Signin</h1>
      <div className="row ">
        <div className="col"></div>
        <div className="col-md-5">
          <div className="form p-4 my-5" id='signinform'>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Email address
              </label>
              <input id='email'
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type="text"
                className="form-control"
                placeholder="Enter Email address"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Password
              </label>
              <input id='password'
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                type="password"
                className="form-control"
                
              />
            </div>

            <div className="mb-3" id='other'>
              <div>
              <br></br>
              <span>No account yet?</span> <Link to="/signup" className="linkq">Signup here</Link>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <div>
                <span>forgot password?</span>
                 <Link to="/secretquestion" className="linkq" >security Question</Link>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <button onClick={signinUser} className="btn btn-primary">
                Signin
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
      <div className="row"> <Footer/></div>
    </div>
    
  )
}

export default Signin
