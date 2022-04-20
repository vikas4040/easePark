import { useLocation, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { URL } from '../../config'
import ParkingRow from '../../component/ParkingRow'
import { toast } from 'react-toastify'
import axios from 'axios'
 
 const DeleteUser = () =>{

  
    const navigate = useNavigate()
    const { state } = useLocation()
    //const { id }  = state
    const deleteUserById = () =>{
        const id = state
        const url = `${URL}/user/delete/${state}`
        axios.delete(url).then((response) => {
             const result = response.data
             if(result['status'] == 'success'){
                toast.success("User deleted Successfully")
                navigate('/user')
             }else {
                 toast.error("User not deleted", )
             }
        })
    }

    useEffect(() => {
        deleteUserById()
      }, [])

     
 }

 export default DeleteUser