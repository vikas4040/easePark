import { toast } from 'react-toastify'
import axios from 'axios'
import './styles.css';
import { useNavigate } from 'react-router'
import { URL } from '../../config'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../component/NavBar';
import Footer from '../../component/Footer'

//import Header1 from '../../component/Header1';
// import { FiEdit2 } from 'react-icons/fi';
// import Footer from '../../component/footer';
//localStorage.getItem("id")
const Profile = () =>{
  const [id, setID] = useState(sessionStorage.getItem("id"));
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [adharNo, setAdharNo] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [data,setData]=useState([]);
  var item_value = sessionStorage.getItem("id");
 
  useEffect(() => {
      if(id==null) {
       alert("please login.....")
       
      }
      axios.get(`${URL}/user/${id}`).then(response=>{
        const result=response.data
        console.log(result)
        console.log(result.data)
        console.log(result.data.userInfo.firstName)

      setData(response.data)  
      setFirstName(result.data.userInfo.firstName)
      setLastName(result.data.userInfo.lastName)
      setEmail(result.data.userInfo.email)
      setDob(result.data.userInfo.dob)
      setAdharNo(result.data.userInfo.adharNo)
      setPhoneNo(result.data.userInfo.phoneNo)
      
      })
  }, [])

  return (
    <div>
      <NavBar />
    <div className="profile-container container-fluid bg-light">
      
      <div className="profile-content">
        <h1>Profile</h1>
        
        
        <form>
         
          <strong className="st"  >firstName:</strong>
          <p className="label"> {firstName} </p> 

          <strong  className="st" >LastName:</strong>
          <p className="label">{lastName}</p>

          <strong className="st" >Email:</strong>
          <p className="label" >{email}</p>

          <strong className="st" >DOB:</strong>
          <p className="label">{dob}</p>

          <strong className="st" >Aadhar Number :</strong>
          <p className="label">{adharNo}</p>

          <strong className="st" >Mobile Number :</strong>
          <p className="label">{phoneNo}</p>
          
        </form>
        <Link to={{pathname:"/home"}}>
          {/* <FiEdit2 size={16} color="#e02041"/> */}
          Home
        </Link>
        <Link to={{pathname:"/updateprofile" ,state:data}}>
          {/* <FiEdit2 size={16} color="#e02041"/> */}
          Edit Profile
        </Link>
        <Link to={{pathname:"/userHistory" ,state:data}}>
          {/* <FiEdit2 size={16} color="#e02041"/> */}
        Your Booking History
        </Link>

      </div>
      </div>
    
    
    <div className="row"> <Footer/></div>

    </div>
   
  )
}

export default Profile
