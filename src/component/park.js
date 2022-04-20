import React,{useState} from  "react"
import { useNavigate } from "react-router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from "axios"
import Comment from "./Comment"
import { URL } from '../config'


const Park = (props) => {
  //  const[navigate]=useNavigate()
  const { park } = props
  const navigate = useNavigate()

  const [commnets, setComments] = useState([]);

  const getComments = () => {
      axios.get(`${URL}/comment/${park.parkId}`).then((response) => {
          const result = response.data
          setComments(result.data)
          console.log(result.data)
      })
  }

    return(
      <div>
        {/* <div className="row">
          <div className="col-sm-5">
            <ul className="list-group">
              <li className="list-group-item">
             <div id="parkCard" className="card" >
              <div className="card-body">
                <div className="row">
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
                    <button onClick={getComments} className="btn btn-primary">navigate</button>
                    </div>
                    </div>
                    
                    </div>
                  </div>
                 </div>
                 </li> 
                 </ul>
                </div>
    
                  <div className="col-sm-7">
                  {commnets.map((comments) => {
                        return <Comment comm={comments}></Comment>
                    })}
                    </div>
                  
        </div> */}




<div className="row">
          <div className="col-sm-5">
            <ul className="list-group">
              <li className="list-group-item">
             <div id="parkCard" className="card" >
              <div className="card-body">
                <div className="row">
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
                    <button onClick={getComments} className="btn btn-primary">navigate</button>
                    </div>
                    </div>
                    
                    </div>
                  </div>
                 </div>
                 </li> 
                 </ul>
                </div>
    
                  <div className="col-sm-7">
                  {commnets.map((comments) => {
                        return <Comment comm={comments}></Comment>
                    })}
                    </div>
                  
        </div>
              
      </div> 

        
       

         
        
     
     
    )
}
export default Park
