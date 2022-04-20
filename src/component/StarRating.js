import React,{useState,useEffect} from 'react'
import { FaStar } from 'react-icons/fa'
import { Label } from 'reactstrap';
import axios from "axios"
import { URL } from "../config"

const StarRating = (props) => {
    const [rating, setRating] = useState();
    const userId=sessionStorage.getItem('id')
    const parkingId=props.parkId;
    //const userId=2;
    //const [hover, setHover] = useState(0);
    console.log(rating)
    console.log(userId)
    console.log(parkingId)

    useEffect(()=>{
        //document.title="Booking || EasePark"
        AddRating()
      })
      
    const AddRating =()=>
     {
        const body={
            userId,
             parkingId,
            rating
        }
       axios.post(`${URL}/rating/addRating`,body).then((response)=>{
          
        const result=response.data
       
       })
    }
    return (
      <div className="star-rating" >
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              
              type="button"
              key={index}
              className={index <= ( rating) ? "on" : "off"}
              onClick={() => setRating(index) }
             // onMouseEnter={() => setHover(index)}
             // onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
           
          );
        })}
         <div>
         {/* <button onClick={AddRating} className="btn btn-primary">
                Give-Rating
              </button> */}
      </div>
      </div>
      
    )
  };
export default StarRating