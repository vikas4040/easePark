import axios from "axios"
import React,{useState,useEffect} from 'react'
import { URL } from '../config'

const GetAvarageRating =(props)=>
{
    const ParkingId=props.pId
    const [rating, setRating] = useState([]);
    useEffect(()=>{
        //document.title="Booking || EasePark"
        getAverageRating()
      })
    console.log("gghdhdhdh "+ParkingId)
    const getAverageRating = () => {
        axios.get(`${URL}/rating/avg/${ParkingId}`).then((response) => {
            const result = response.data
            setRating(result.data)
            console.log("gggghhh "+result.data)
        })
    }

                return (
                <div>

                {/* {rating.map((rate) => ( */}
                                <li style={{color: "blue"}} >{Math.round(rating)}</li>
                                {/* // ))} */}
                 </div>
    )
}

export default GetAvarageRating