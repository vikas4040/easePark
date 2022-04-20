import { toast } from 'react-toastify'
import axios from 'axios'
import Header from "../../component/Header1"
import './styles.css';
import { useNavigate } from 'react-router'
import { URL } from '../../config'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';
import History from './../../component/History';
import NavBar from '../../component/NavBar';
import Footer from '../../component/Footer';
import moment from 'moment';
// import Footer from './../../component/footer';
//localStorage.getItem("id")
const UserHistory = () =>{

  // const [id, setID] = useState(sessionStorage.getItem("id"));
  var id=sessionStorage.getItem('id')

  useEffect(()=>{
    document.title="User History"
     getAllHistory()  
  },[])

  const url = `${URL}/user/history/${id}`
  const getAllHistory=()=>{
      axios.get(url).then((response)=>{
         const result = response.data
         if (result['status'] == 'success') {
          setHistory(result.data.userInfo)
          console.log(result.data.userInfo)
         }else{
              toast.error('error')
         }
        
      })

  }

  const[history, setHistory]=useState([]);
  console.log("location are "+history.data)
   console.log("location "+history)
// get the logged in user's information
const navigate = useNavigate()

const logoutUser = () => {
  // remove the logged users details from session storage
 
  // navigate to sign in component
  navigate('/signin')
}
const signinUser = () => {
  navigate('/signin')
}
const signupUser = () => {
  navigate('/signup')
}
const profile = () => {
  navigate('/profile')
}


return (
  <div>
    <NavBar />
    <br></br>
    <h1>User History</h1>
   
  <div className="container d-flex flex-wrap">      
      <div className="row">
        <div className="col-12">
          <table className="table table-image">
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Number Plate</th>
                <th scope="col">Parking Name</th>
                <th scope="col">Location</th>
                <th scope="col">Entry Time</th>
                <th scope="col">Exit Time</th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
            {history.map((item) => {
     return <History history={item} />
       })}
            </tbody>
          </table>
          <br></br>
          <br></br>
        
        </div>
      </div>
    </div>
    <div>
              <Link to="/home">
            <FiArrowLeft size={26} color="#e02041"/>
           Go Home
          </Link>

                 <Link to="/Profile">
               <FiArrowLeft size={26} color="#e02041"/>
                 Go back</Link>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              
              <div className="row"> <Footer/></div> 
  </div>
  
)
}

export default UserHistory



 