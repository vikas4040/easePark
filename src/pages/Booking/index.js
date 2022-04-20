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
import Footer from "../../component/Footer";


const Booking=()=>{
    const navigate=useNavigate();
    const {state}=useLocation()
    const parkId=state.parkId;
    console.log("dfdfdfdf  "+parkId  +" "+ state.slots)
    

    useEffect(()=>{
        //document.title="Booking || EasePark"
         currentBookedSlots()
         total()
      },[])

    const[bookedSlots,setBookedSlots]=useState([])
    const[totalSlots,setTotalSlots]=useState([])
    console.log("ffgfgggfg "+bookedSlots)
     const currentBookedSlots=()=>{
         axios.get(`${URL}/bookingg/${state.parkId}`).then((response)=>{
            const result = response.data
            if (response['status'] == '200') {
                setBookedSlots(result)
            } else {
              toast.error(result['error'])
            }
          })
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

                <div id="slotArea" >

                    
                    
               <div className="d-flex flex-wrap " >
               {
                totalSlots.map((slot)=>{
                    if(bookedSlots.includes(slot))
                   {   return <div style={{margin:"5px"}}>
                   <Button className="bookedSlotBtn" disabled color="danger" >{slot}</Button>
                   <p id="slotText">booked</p> </div> 
                   }
                   else{
                    return <div style={{margin:"5px"}}>
                   <Button className="availableSlotBtn" color="primary" onClick={()=>{navigate('/bookSlot',{state:{slotNo:slot,park:parkId}})} }>{slot}</Button></div> 
                   }            
                     
                })       
               }
               </div>
               </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
               <div className="row mt-5"> <Footer/></div>
           </div>
    )
}

export default Booking