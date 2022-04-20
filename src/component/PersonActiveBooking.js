import axios from "axios"
import React,{ useState,useEffect } from "react"
import { URL } from "../config"
import moment from "moment"


const PersonActiveBooking=()=>{
    const[activeBookingDetail,setActiveDetail]=useState([])
    const userId=sessionStorage.getItem('id')
      
    useEffect(()=>{
         active()
    },[])

    

    const active=()=>{
   axios.get(`${URL}/booking/user/${userId}`).then((response)=>{
       const result=response.data
       if(response['status']=='200')
       {
           setActiveDetail(result)
           console.log("llllllllll ",result)
           console.log("kkkkkkkk ", result[0].vehicle.name)
           
       }
   })
  }


  //  console.log("hahahahah ",activeBookingDetail.length())
  

          
         

    return(
        <div>

        <div className="flip-card shadow-lg p-3 mb-5 bg-white rounded">
         <div className="flip-card-inner">
           <div className="flip-card-front">
           <div>Your Active Booking</div>
           </div>
           <div className="flip-card-back">
             {/* <h1 style={{color:"#838996"}}>{activeBookingDetail[0].vehicle.name}</h1>
             <div style={{lineHeight:"18px"}}><p>{activeBookingDetail[0].parking.parking_Name} Slot No:{activeBookingDetail[0].slotNo} </p>
             <h6>Check out Time:</h6> {moment(activeBookingDetail[0].exitTime).format('LLLL')} (
            {moment(activeBookingDetail[0].exitTime).fromNow()})</div> */}
           </div>
         </div>
       </div>
       </div>
    )
}

export default PersonActiveBooking