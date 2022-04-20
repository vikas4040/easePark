import { useLocation, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { URL } from '../../config'
import { toast } from 'react-toastify'
import axios, { Axios } from 'axios'
 
 const DeleteParking = () =>{

    const { state } = useLocation()
    const navigate = useNavigate()

    const deleteParking = () =>{
        const { id } = state
        const url = `${URL}/parking/delete/${id}`
        axios.delete(url).then((response) => {
             const result = response.data
             if(result['status'] == 'success'){
                toast.success("parking deleted Successfully")
                navigate('/admin')
             }else {
                 toast.error("Parking not deleted")
             }
        })
    }

    useEffect(() => {
        deleteParking()
      }, [])

     return (
         <h1>delete Parking</h1>
     )
 }

 export default DeleteParking