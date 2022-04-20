import { Link } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../config'
import "./index.css" 
import NavBar from '../../component/NavBar'
import Footer from '../../component/Footer'

//Userid | firstName    | lastName | email             | password      
// | dob        | adharNo      | phoneNo    | role  | secretQue     | secretAns
const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [dob, setDob] = useState('')
  const [adharNo, setAdharNo] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [role, setRole] = useState('')
  const [secretQue, setSecretQue] = useState('')
  const [secretAns, setSecretAns] = useState('')
 

  // used to navigate from one component to another
  const navigate = useNavigate()

  const signupUser = () => {
    if (firstName.length == 0) {
      toast.warning('Please enter First Name')
    } else if (lastName.length == 0) {
      toast.warning('Please enter Last Name')
    } else if (email.length == 0) {
      toast.warning('Please enter Email')
    } else if (password.length == 0) {
      toast.warning('Please enter Password')
    } else if (dob.length == 0) {
      toast.warning('Please enter your dob')
    } else if (adharNo.length == 0) {
      toast.warning('Please enter your adharNo')  
    } else if (adharNo.length !=12) {
      toast.warning('Please enter 12 digit adharNo')  
    }else if (phoneNo.length == 0) {
      toast.warning('Please enter your phone Number') 
    }else if (phoneNo.length != 10) {
      toast.warning('Please enter 10 digit phone Number') 
    }  else if (secretQue.length == 0) {
      toast.warning('Please enter your Secret Question') 
    } else if (secretAns.length == 0) {
      toast.warning('Please enter your Secret Answer')  
    }
    //  else if (password != confirmPassword) {
    //   toast.warning('Password does not match')
    //   } 
    else {
      const body = {
        firstName,
        lastName,
        email,
        password,
        dob,
        adharNo,
        phoneNo,
        secretQue,
        secretAns,
        role,
      }

      // url to call the api
      const url = `${URL}/user/signup`

      // http method: post
      // body: contains the data to be sent to the API
      axios.post(url, body).then((response) => {
        // get the data from the response
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Successfully signed up new user')

          // navigate to the signin page
          navigate('/signin')
        } else {
          toast.error(result['error'])
        }
      })
    }
  }

  return (
    <div className="container-fluid bg-light">
          <NavBar />
      <br></br>
      <h1 className="heading mt-3">Registration</h1>
      <br></br>
      <div className="row justify-content-center">
        <div className="col"></div>
        <div className="col-md-5 py-5">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                First Name
              </label>
              
              <input
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
                type="text"
                className="form-control"
                placeholder="Enter first name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Last Name
              </label>
              <input
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
                type="text"
                className="form-control"
                placeholder="Enter last name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Email 
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type="text"
                className="form-control"
                placeholder="Enter email id"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                type="password"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Dob
              </label>
              <input
                onChange={(e) => {
                  setDob(e.target.value)
                }}
                type="date"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                adharNo
              </label>
              <input
                onChange={(e) => {
                  setAdharNo(e.target.value)
                }}
                type="text"
                className="form-control"
                placeholder="Enter Aadhar number"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Phone Number
              </label>
              <input
                onChange={(e) => {
                  setPhoneNo(e.target.value)
                }}
                type="text"
                className="form-control"
                placeholder="mobile number"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Secret Question
              </label>
              <select onChange={(e) => {
                 setSecretQue(e.target.value)
              }} id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option values="My favorite Pet">My favorite Pet</option>
                <option values="My favorite movie">My favorite movie</option>
                <option values="My favorite place to visit">My favorite place to visit</option>
                <option values="My favorite sport">My favorite sport</option>
              </select>
            </div>

            {/* <div className="mb-3">
              <label htmlFor="" className="label-control">
                Secret Question
              </label>
              <input
                onChange={(e) => {
                  setSecretQue(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div> */}

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Secret Answer
              </label>
              <input
                onChange={(e) => {
                  setSecretAns(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Role
              </label>
              <input
                onChange={(e) => {
                 setRole(e.target.value)
                }}
                type="text"
                className="form-control"
                
                required = {true} 
                readOnly = {true}
               value="user"
                
              />
            </div>

            <div className="mb-3">
              <div>
                Already have an account? <Link to="/signin" className="link">Signin here.</Link>
              </div>
              <br></br>
              <div>
               for home page  <Link to="/home" className="link">click here</Link>
              </div>
              <br></br>
              <button onClick={signupUser} className="btn btn-primary">
                Signup
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

export default Signup
