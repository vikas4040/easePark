import React,{useState,useEffect} from "react";
import axios from "axios";
import "./index.css"
import { URL } from "../../config";
import { useLocation } from "react-router";
import { toast } from "react-toastify";
// import Park from "../../component/park";
import NavBar from "../../component/NavBar";
import Comment from "../../component/Comment";
import { useNavigate } from "react-router-dom";
import StarRating from "../../component/StarRating";
import Footer from "../../component/Footer";
import GetAvarageRating from "../../component/GetAvarageRating";

const Parking=()=>{
    const [pp,setpp]=useState('')
    const navigate = useNavigate()
    const{ state }=useLocation()
    const uId=sessionStorage.getItem('id')
      useEffect(()=>{
         // document.title("Parking||EaseParking")
           parkingByLocation();
      
      },[])
      const parkingByLocation=()=>{
          const url=`${URL}/parking/${state}`
          axios.get(url).then((response)=>{
              var result=response.data
              if(result['status']=='success')
                 { setParking(result.data)
                  }
                  else  
                  toast.error(result['error'])
                  console.log(result)
          })
      }

      const [parking,setParking]=useState([])
      const [comments, setComments] = useState([]);
      const [rating, setRating] = useState([]);
      const[description,setAddComment]=useState('')

      const getAverageRating = () => {
        axios.get(`${URL}/rating/avg/${pp}`).then((response) => {
            const result = response.data
            setRating(result.data)
            //console.log(result.data)
        })
    }

      const getComments = (park) => {
            setpp(park)
            document.getElementById('commentpannel').removeAttribute('hidden')
          axios.get(`${URL}/comment/${park.parkId}`).then((response) => {
          const result = response.data
          setComments(result.data)
      })
  }

  const createComment=()=>
    {
      if(description.length==0)
      {
        toast.warning()
      }
      const body={
        description,
	      uId
      }
      document.getElementById("Textarea1").value=""
      axios.post(`${URL}/comment/${pp.parkId}`,body).then((response) =>
      {
        const result = response.data
        if(result['status']=="success")
        {
        toast.info("thanks for your comment !!!")
        navigate("/parking")
        
        }
      })
    }


return(
    <div>
          
         <NavBar />
             <div >
                 <div className="row py-5">
                     <div className="col-sm-5">
                {parking.map((park)=>{
                   return (
                       <div>   
                       {/* <div className="w-50 p-2"> */}
                      <ul className="list-group">
                        <li className="list-group-item my-3">
                       <div id="parkCard" className="card " >
                        <div className="card-body">
                          <div className="row">
                          <div className="col">
                              <img
              style={{ width: "100%", height: "100%" }}
              src={park.image}
              alt={park.parking_Name}
            ></img>
                               </div>
                            <div className="col">
                            <h5 className="pName">{park.parking_Name}</h5>
                            </div>
                            <div className="col">
                             <div className="capacity"> <h4>{park.slots+" Slots"}</h4>
                              </div>
                              </div>
                              <div className="row">
                              <div id="parkAddress" className="col-sm-7">
                              {park.address}  
                              </div>  
                              <div id="parkButton" className="col-sm-5">
                              <button style={{paddingLeft:"1rem",paddingRight:"1rem",marginLeft:"1.5rem"}} onClick={()=>{getComments(park)}} className="btn btn-primary">More</button>
                              </div>

                              <div className="row">
                               
                               </div>

                              </div>
                              
                              </div>
                            </div>
                           </div>
                           </li> 
                           </ul>
                           </div>
                    //    </div>   
                   )
                })}
             </div>
             
             <div className="col-sm-7">
             <div className="card" id="commentpannel" hidden style={{padding:"1rem"}}>
                  <div className="card-body" >
                  {/* {rating.map((rate) => (
                                <li style={{color: "blue"}} >{Math.round(rate[1])}</li>
                                    // <Rating rate={rate[1]}></Rating>
                                ))} */}
                        <div>
                          <div className="row">
                          <div className="col-sm-8">
                      <StarRating  parkId={pp.parkId} />
                      </div>
                      <div className="col-sm-4">
                      Avg Rating<GetAvarageRating pId={pp.parkId} />
                     </div>
                     </div>
                      </div>
                    </div>
                    <div id="p_title">{pp.parking_Name}</div>
                    <p className="card-text"></p>
                    <div className="row" style={{padding:"2rem"}}>
                      <div className="col-sm-8">
                    <button id="book-now"  onClick={() => {navigate('/booking',{ state: pp})
                    }} className="btn btn-primary">Book Now</button>
                    </div>
                    
                    <div className="col-sm-4">
                    <button  id="book-adv"  onClick={() => {navigate('/advBooking',{ state: pp})
                    }} className="btn btn-primary">Advance Book</button>
                  
                    </div>
                    </div>
                    <hr/>
                    
                    
                    {comments.map((comments) => {
                    return <Comment comm={comments}></Comment>
                    
                })}

                <div className="addComment">
                  
                       <label for="Textarea1">Your Comment....</label>
                       <textarea className="form-control" onChange={(e) => {setAddComment(e.target.value)}} id="Textarea1" rows="3"></textarea>
                       <button id="comment-btn" onClick={createComment} className="btn btn-info">comment</button>
                    
                </div>
                  </div>
             </div>
            </div>
             </div>
             <Footer />
            </div>
            

)
}
export default Parking