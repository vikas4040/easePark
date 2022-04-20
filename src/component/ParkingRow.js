import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useNavigate } from "react-router"
import { URL } from "../config"
import { toast } from 'react-toastify'
import Location from './Location';


const ParkingRow = (props) => {
  const { parking } = props
  const navigate = useNavigate()


  return (
    <tr >
        
       <td>{parking.parkId}</td>
     
       <td>
       <img src={parking.image} className="img-fluid img-thumbnail" alt="movie poster" width={85} />
       </td>

      <td>{parking.parking_Name}</td>
      <td>{parking.location}</td>
      <td>{parking.slots}</td>
      <td>{parking.address}</td>
      
      <td>
        <button   onClick={() => {
            navigate('/editParking',   { state: {id: parking.parkId } })
          }}       
        className="btn btn-info ">
            Edit
          </button>              

      </td>
      <td>
        <button   onClick={() => {
            navigate('/deleteParking',   { state: {id: parking.parkId } })
          }}       
        className="btn btn-danger ">
            Delete
          </button>              

      </td>
    </tr>
  )
}
//

export default ParkingRow
