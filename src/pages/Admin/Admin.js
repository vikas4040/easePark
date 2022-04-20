import { useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from '../../config'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import './Admin.css'
import AdminNavbar from './../../component/AdminNavbar';
import ParkingRow from './../../component/ParkingRow';
import NavBar from '../../component/NavBar'
import Footer from '../../component/Footer'

const Admin = () =>{
  
    // const navigate = useNavigate()


    const [parkings, setParkings] = useState([])

     // console.log("it is state")
      
    const getParking= () =>{
        const url = `${URL}/parking/all`

        axios.get(url).then((response) => {
         const result = response.data
         //console.log("result")
         console.log(result)
        // console.log(typeof(result))
        // if (result['status'] == 'success') {
          if (result != null){
            setParkings(result.data)
         } else {
           toast.error(result['error'])
         }
       })
  }
      
  
  useEffect(() => {   
    getParking()
    console.log('getting called')
  }, [])

    return(
           <div>
               <NavBar />
          <div className="col">
              <div>
              <AdminNavbar />
              </div>
              <div >
                  <h2 class="title">Parking</h2>

                  <Link to="/newParking">
                  <a  className="btn btn-success">Add Parking</a>
                   </Link>
              </div>
              <br></br>
              <br></br>
              <div >
              <table className="table table-striped">
        <thead>
          <tr>
              {/* parkid | parking_Name    | location  | no_of_Slots | address           | image */}
            <th>id</th>
            <th>image</th>
             <th>Parking Name</th>
             <th>Location</th>
             <th>Total Slots</th>
             <th>Address</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {parkings.map((item) => {
            return <ParkingRow parking={item} />
          })}
        </tbody>
      </table>
              </div>
            </div> 
            <div className="row"> <Footer/></div> 
        </div>    
         
    )
}
export default Admin;