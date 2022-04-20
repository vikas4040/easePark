import { useNavigate } from 'react-router'
import Header from "../../component/Header1"
import NavBar from '../../component/NavBar'
import UpdateProfile from '../UpdateProfile'
import React,{useEffect,useState} from 'react'
import "./index.css"
import {URL} from '../../config'
import axios from 'axios'
import react from 'react'
import Location from '../../component/Location'
import { toast } from 'react-toastify'
import Footer from '../../component/Footer'
import PersonActiveBooking from '../../component/PersonActiveBooking'



const Home = () => {
  useEffect(()=>{
      document.title="Home || EasePark"
       getAllLocation()  
    },[])
    const url = `${URL}/parking/location`
    const getAllLocation=()=>{
        axios.get(url).then((response)=>{
          const result = response.data
          if (result['status'] == 'success') {
            setLocation(result.data)
          } else {
            toast.error(result['error'])
          }
          console.log(response)
          console.log(result)
        })

    }


    const[location, setLocation]=useState([]);
    
    

    console.log("location are "+location.data)
     console.log("location "+location)
  // get the logged in user's information
  // const { id, firstName, lastName } = sessionStorage
  // const navigate = useNavigate()

  // const logoutUser = () => {
  //   // remove the logged users details from session storage
  //   sessionStorage.removeItem('id')
  //   sessionStorage.removeItem('firstName')
  //   sessionStorage.removeItem('lastName')

  //   // navigate to sign in component
  //   navigate('/signin')
  // }
  // const signinUser = () => {
  //   navigate('/signin')
  // }
  // const signupUser = () => {
  //   navigate('/signup')
  // }
  // const profile = () => {
  //   navigate('/profile')
  // }


    
  
 



  return (
    <div>
      <NavBar />
      

      <div className='row justify-content-center bg-light py-5'>
      <h1 className="text-center  ">CITY </h1>
      
        {/* <div className='col-sm-1'></div> */}
    <div className='city col-sm-9 my-5' >
    
        {
         location.map((item)=>{
          
              return <Location location={item} />   })}     
     </div>
     <div className='col-sm-3  my-5'>
       <PersonActiveBooking />
     </div>
     </div>
     
     < Footer />
     </div>
    
    
    
    
  )
}


export default Home
