import { useState } from 'react'
import './index.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate,useLocation } from 'react-router'
import { URL } from '../../config'
import './styles.css';

const EditParking = () => {
    const { state } = useLocation()
    const navigate = useNavigate()
 
  //const [parkId, setParkId] = useState('')
  const [parking_Name, setParking_Name] = useState('')
  //const [location, setLocation] = useState('')
  const [slots, setSlots] = useState('')
  const [address, setAddress] = useState('')
 // const [image, setImage] = useState('')
//   const { parking } = state
  const {id}=state;
 
  

  const editParking = () => {
        
      if (slots.length == 0) {
        // toast.warning('please enter your slots')
    }
    else {
      const body = {
        
        parking_Name,
       // location,
         slots,
        address,
       // image,
      }

      // url to make updateprofile api call
      const url = `${URL}/parking/editParking/${id}`

      // make api call using axios
       axios.put(url, body).then((response) => {
        // get the server result
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Park Details Updated')

          navigate('/admin')
        } else {
          toast.error('Data not get updated')
        }
      })
    }
  }

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <h1>Update Parking Details</h1>
      <br></br>
      <div className="edit-profile-container">

<div className="edit-profile-content">
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
              parkId
              </label>
              <input
              value={id}
                // onChange={(e) => {
                //   setParkId(e.target.value)
                // }}
                // type="text"
                // className="form-control"
                // required = {true} 
                readOnly = {true}
              />
            </div>
            {/* //  parkId;
	//  parking_Name;
	//  location;
	//  slots;
	//  address; */}
  <div className="mb-3">
              <label htmlFor="" className="label-control">
              parking_Name
              </label>
              <input
              //value={parking.parking_Name}
                onChange={(e) => {
                    setParking_Name(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            {/* <div className="mb-3">
              <label htmlFor="" className="label-control">
              location
              </label>
              <input
               //value={parking.location}
                onChange={(e) => {
                    setLocation(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div> */}

            <div className="mb-3">
              <label htmlFor="" className="label-control">
              Slots
              </label>
              <input
              //value={parking.slots}
                onChange={(e) => {
                    setSlots(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="" className="label-control">
              address
              </label>
              <input
            //   value={parking.address}
                onChange={(e) => {
                    setAddress(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>
            {/* <div className="mb-3">
              <label htmlFor="" className="label-control">
              Image URL
              </label>
              <input
            //   value={parking.address}
                onChange={(e) => {
                    setImage(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div> */}
           
            <div className="mb-3">
              <button onClick={editParking} className="btn btn-primary">
               Update Park Details 
              </button>
              <br></br>
        
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default EditParking
