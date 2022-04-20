//import { url } from '../common/constants'
//import { useHistory } from 'react-router-dom'
import { useNavigate } from "react-router"
import { URL } from "../config"
import axios from "axios"
import { toast } from "react-toastify"

const UserRow = (props) => {
  const { users } = props
  const navigate = useNavigate()

            const userId = users.userid
  const deleteUser = () => {
    
    console.log("Remove to favorite")
    const url = `${URL}/user/delete/${users.userid}`

    axios.delete(url).then((response) => {
      
      const result = response.data
      console.log(result)
      if (result['status'] == 'success') {
        toast.success("User Delete")
        navigate('/admin')
      } else {
        toast.error(result['error'])
      }
    })
  }

  //-----------------------------------//
  return (
    <tr>
       <td>{users.userid}</td>
       <td>{users.firstName+"  "+users.lastName}</td>
       <td>{users.email}</td>
       <td>{users.dob}</td>
       <td>{users.adharNo}</td>
       <td>{users.phoneNo}</td>
       <td>

         <button onClick={deleteUser}
            className="btn btn-danger">
             Delete
         </button>

        {/* <button
          onClick={() => {  
            navigate('/deleteUser', { state: {id: users.userid} })
          }}
          className="btn btn-danger">
          Remove
        </button> */}
      </td>
    </tr>
  )
}

export default UserRow
