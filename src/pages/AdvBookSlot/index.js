import { useNavigate } from "react-router"
import { useLocation } from "react-router"
import { useState } from "react"
import { toast } from "react-toastify"
import axios from 'axios'
import { URL } from "../../config"
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import './index.css'
import NavBar from "../../component/NavBar"
import Footer from "../../component/Footer"
//import { useHistory } from "react-router-dom";


const AdvBookSlot=()=>{
    
    const navigate=useNavigate()
    const {state}=useLocation()
    const userId=sessionStorage.getItem('id')
    const slotNo=state.slotNo
    const parkId=state.park
    const exitTime=state.exTime
    const entryTime=state.eTime
    //slotNo:slot,park:parkId,eTime:entryTime,exTime:exitTime
     const[name,setModelName]=useState('')
     const[number_Plate,setVehicleNo]=useState('')
     const[vId,setVId]=useState()
  

    const vehicleDetail = () => {
        if (name.length == 0) {
          toast.warning('please enter your Model')
        } else if (number_Plate.length == 0) {
          toast.warning('please enter your Vehicle No.')
        }
        else {
          const body = {
            name,
            number_Plate,
            userId
          }
          const url=`${URL}/vehicle/addVehicle`
          axios.post(url, body).then((response) => {
              console.log(response)
              console.log(response.data)
              console.log(response.data.data)
            // get the data from the response
             //const result = response.data
             //console.log("gggggg "+result)
             setVId(response.data.data)
             if (response.data['status'] =='success') {  
              toast.success('Successfully added the vehicle')
              document.getElementById("confirm-booking").removeAttribute("hidden") 
              document.getElementById("add-Vehicle").hidden=true
              document.getElementById("cancel").removeAttribute("hidden") 

              

              // navigate to the signin page
              //navigate('/bookSlot')
            } else {
              toast.error(response.data['error'])
             }
          })
         
        } 
         
    }
   
    const Book=()=>{
      const body2={
        slotNo,
        vId,
        parkId,
        entryTime,
        exitTime
      }
        
        const url2=`${URL}/booking/add/future`
        axios.post(url2, body2).then((response) => {
          // get the data from the response
          const result = response.data
          console.log(response)
          console.log(result)
          console.log(result.data)
          console.log(result.data.data)
          setVId(result.data)
          if (result['status'] == 'success') {
            toast.success('Successfully booked')
            // navigate to the signin page
            navigate('/payment',{state:{bId:result.data.bId ,entryTime:result.data.entryTime,exitTime:result.data.exitTime}})
          
          } else {
            toast.error(result['error'])
          }
        })} 
    return(
      <div>
      <NavBar />
<br></br>
<h1 style={{color:"#f25d26"}}>Booking </h1>
<br></br>
<div className="row">
  <div className="col"></div>
  <div className="card">
      <div className="card-body">
  <div className="col">
    <div className="form">
      <div className="mb-3">
        <label htmlFor="" className="label-control">
          Model-Name
        </label>
        
        <input id="m-name" 
          onChange={(e) => {
              setModelName(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="" className="label-control">
          Set-VehicleNO
        </label>
        <input id="v-no"
          onChange={(e) => {
              setVehicleNo(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>
        <br></br>
        <button id="add-Vehicle" onClick={vehicleDetail} className="btn btn-primary">
          Add-Vehicle
        </button>
      </div>
      </div>
    </div>
        {/* <button id="add-Vehicle" onClick={vehicleDetail} className="btn btn-primary">
          Add-Vehicle
        </button> */}
        <div className="row">
          <div className="col">
    <button id="confirm-booking" hidden onClick={Book} className="btn btn-primary">
          Confirm
        </button>
        </div>
        {/* <div className="col">
    <button id="cancel" hidden  className="btn btn-danger">
          Cancel
        </button>  
        </div> */}
        </div> 

  </div>
  <div className="col"></div>
  </div>
  <br/>
  <div className="row"> <Footer/></div>
  </div>

    
    )
}
export default AdvBookSlot