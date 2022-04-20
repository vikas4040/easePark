import { Navigate } from "react-router"
import { useEffect, useState } from "react"
import axios from "axios"
import { URL } from '../../config'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import UserRow from "../../component/UserRow"
import './User.css'
import AdminNavbar from './../../component/AdminNavbar';

const User = () =>{

     // const navigate = useNavigate()

   const [users, setUsers] = useState([])

   // console.log("it is state")

     const getUser= () =>{
           const url = `${URL}/user/All`

           axios.get(url).then((response) => {
                const result = response.data
                console.log(result)
          if (result['status'] == 'success') {
         //if (result != null){
            setUsers(result.data)
        } else {
          toast.error(result['error'])
        }
      })
 }

 useEffect(() => {   
   getUser()
   console.log('getting called')
 }, [])

    return (
   <div className="col">
       <div>
       <AdminNavbar />
       </div>
       <div>
         <h2 class="title">Users</h2>
         
         {/* <Link to="/add-album">
                 <a  className="btn btn-success">Add Album</a>
         </Link> */}
         </div>
         <br></br>
             <br></br>
             <div >
             <table className="table table-striped">
       <thead>
         <tr>
           <th>id</th>
           <th>Name</th>
            <th>Email</th>
           <th>dob</th>
           <th>adharNo</th>
           <th>phoneNo</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>
       {users.map((item) => {
           return <UserRow users={item} />
         })}
       </tbody>
     </table>
             </div>

   </div>
    )
}

export default User