import { useLocation } from "react-router"
import axios from "axios"
import React,{useEffect,useState} from 'react'
import { URL } from "../../config"
import { toast } from "react-toastify"
import { Button,ButtonGroup,ButtonToolbar } from 'reactstrap';
import Slots from "../../component/Slots"
import NavBar from "../../component/NavBar"
import "./index.css"
import { useNavigate } from "react-router"
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import Footer from "../../component/Footer";




const AdvBooking=()=>{
    const navigate=useNavigate();
    const {state}=useLocation()
    const parkId=state.parkId;
    console.log("dfdfdfdf  "+parkId  +" "+ state.slots)
    

    useEffect(()=>{
         total()
      },[])

    const[bookedSlots,setBookedSlots]=useState([])
    const[totalSlots,setTotalSlots]=useState([])
    const[entryTime,setEntryTime]=useState('')
    const[exitTime,setExitTime]=useState('')
    console.log("ffgfgggfg "+bookedSlots)


     const currentBookedSlots=()=>{
         axios.post(`${URL}/advbooking/${state.parkId}`,body).then((response)=>{
            const result = response.data
            if (response['status'] == '200') {
                setBookedSlots(result)
                console.log(result)
                document.getElementById("slotArea").removeAttribute("hidden")
            } else {
              toast.error(result['error'])
            }
          })
     }
 console.log(entryTime)
 console.log(exitTime)
     const body={
         entryTime,
         exitTime
     }
           
    
    
     const total=()=>{
         //console.log("ravi "+state.slots)
     var slots1=[]
     for(var i=1;i<=state.slots;i++)
     {slots1.push(i)}
    setTotalSlots(slots1)
     }


   return(
           <div>
               <NavBar />
               {/* <div className="row">
                <div className="col-sm-1"></div> */}
                
                <br />
                <br />
                <br />
                <div id="date-time" style={{width:"50%"}}>

                <p id="entry-time" style={{color:"#f25d26"}}  hidden>Select Entry time</p>
           <DateTimePickerComponent  onChange={(e) => {
                    setEntryTime(e.target.value)
                }} placeholder="choose the proper Exit time "
           format="yyyy-MM-ddTHH:mm:ss" step={60} width={500}>
           
           </DateTimePickerComponent>
                 <br/>

                <p id="exit-time" style={{color:"#f25d26"}}  hidden>Select Exit time</p>
           <DateTimePickerComponent  onChange={(e) => {
                    setExitTime(e.target.value)
                }} placeholder="choose the proper Exit time "
           format="yyyy-MM-ddTHH:mm:ss" step={60} width={500}>
           
           </DateTimePickerComponent>
              <div style={{paddingTop:"1rem"}}>
           <button id="genetate-slot" onClick={currentBookedSlots} className="btn btn-primary">
                Submit
              </button>
              </div>
               
            </div>


            <div id="slotArea" hidden>    
            <div  className="d-flex flex-wrap">           
                {
                totalSlots.map((slot)=>{
                    if(bookedSlots.includes(slot))
                   {   return <div style={{margin:"5px"}}>
                   <Button className="bookedSlotBtn" disabled color="danger" >{slot}</Button>
                   <p id="slotText">booked</p> </div> 
                   }
                   else{
                    return <div style={{margin:"5px"}}>
                   <Button className="availableSlotBtn" color="primary" onClick={()=>{navigate('/advbookSlot',{state:{slotNo:slot,park:parkId,eTime:entryTime,exTime:exitTime}})} }>{slot}</Button></div> 
                   }            
                     
                })       
               }
               </div>
               </div>

               
               <div className="dateTime">
                   
                   
               </div>

               <div className="row " style={{paddingTop:"15rem"}}> <Footer/></div>
            
           </div>
    )
}

export default AdvBooking