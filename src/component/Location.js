import react from "react";
import { Link } from "react-router-dom";
import pune from "../assert/Pune.png";
import patna from "../assert/patna.png";
import kanpur from "../assert/kanpur.png";
import { useNavigate } from "react-router";
import "../Style/locationcard.css"


const Location=(props)=>{
   const {location}=props
   var img=`${location}.png`

   const navigate=useNavigate()
   
   
    return(
        <div>
             <div className="row " >
                 <div className="col-sm-4"></div>
           <div className="col-sm-6">
             <div id="locationCard" className="card ">
               <div className=" citycard card-body my-5">                   
                 <div className="media position-relative">
                 <img id="locationImg" src={img} className=" image mr-3 " alt=""/>
                 <div className="media-body">
                 <h5 className="mt-0">{location}</h5>
                 {/* <Link to="/parking" className="stretched-link"
                   onClick={navigate('/parking', { state: { city:location } })}></Link> */}
            <button 
              onClick={() => {
                navigate('/parking', { state: location })
              }}
              className="btn btn-primary"
            >
              Parking
            </button>
               </div>
             </div>
           </div>
           </div>
        </div>
        </div>
        </div>
        
    )
}
export default Location;



