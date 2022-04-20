import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../config'
import NavBar from "../../component/NavBar"
import Footer from '../../component/Footer'

const SecretQuestion = () => {
  const [email, setEmail] = useState('')
  const [secretQue, setSecretQuestion] = useState('')
  const [secretAns, setSecretAnswer] = useState('')
  const [status, setStatus] = useState('')
  const no = 1
  const [diable, setDisable] = useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  const navigate = useNavigate()
  const secretquestion = () => {
    if (email.length == 0) {
      toast.warning('please enter your email')
    } else if (secretQue.length == 0) {
      toast.warning('please enter your Secret Question')
    } else if (secretAns.length == 0) {
      toast.warning('please enter your Secret Answer')
    } else {
      const body = {
        email,
        secretQue,
        secretAns,
      }

      // url to make signin api call
      const url = `${URL}/user/forgotpassword`

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          setStatus(no)
          console.log(status)
         
          setDisable(true)

        } else {
          toast.error('Invalid Secret Question or Secret Answer')
        }
      })
    }
  }
  const forgotpassword = () => {
    if (newPassword.length == 0) {
      toast.warning('please enter your New Password')
    } else if (confirmNewPassword.length == 0) {
      toast.warning('please enter Confirm New Password')
    }else if (newPassword != confirmNewPassword) {
      toast.warning('please enter same password at both places')
    }
     else {
      const body = {
        email,
        password: newPassword

      }
      const url = `${URL}/user/changepassword`
      axios.post(url, body).then((response) => {
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Password changed')
          navigate('/signin')
        } else {
          toast.error('FAIL!')
        }
      })
    }
  }
  return (
    
        <div className="container-fluid bg-light vh-100">
      
      <NavBar />
      <br></br>
      <br></br>
      <br></br>
      <h1>Secret Question</h1>
      <br></br>

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form my-5">
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

              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Secret Question
              </label>
              <select onChange={(e) => {
                setSecretQuestion(e.target.value)
              }} id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option values="My favorite Pet">My favorite Pet</option>
                <option values="My favorite movie">My favorite movie</option>
                <option values="My favorite place to visit">My favorite place to visit</option>
                <option values="My favorite sport">My favorite sport</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Secret Answer
              </label>
              <input
                onChange={(e) => {
                  setSecretAnswer(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <br></br>

              <br></br>
              <button disabled={diable} onClick={secretquestion} className="btn btn-primary">
                Submit
              </button>
            </div>
            <div>
              {(status == 1 &&
                <div>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="" className="label-control">New PassWord</label>
                      <input type="text" className="form-control" onChange={(e) => {
                        setNewPassword(e.target.value)
                      }} />
                    </div>
                    <div className="col"><label htmlFor="" className="label-control" >confirm New PassWord</label>
                      <input type="text" className="form-control" onChange={(e) => {
                        setConfirmNewPassword(e.target.value)
                      }} /></div>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col"> <button onClick={forgotpassword} className="btn btn-primary">
                      Change Password
                    </button></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
      <div className="row"> <Footer/></div>
    </div>
  )
}

export default SecretQuestion