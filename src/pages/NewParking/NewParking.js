import { Link } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../config'
import Admin from './../Admin/Admin';
import Footer from '../../component/Footer'
import NavBar from '../../component/NavBar'


// private String parking_Name;
// 		private String location;
// 		@Column(name="no_of_Slots")
// 		private int slots;
// 		private String address;

const NewParking = () => {

  const [parkId, setParkId] = useState('')
  const [parking_Name, setParking_Name] = useState('')
  const [location, setLocation] = useState('')
  const [slots, setSlots] = useState('')
  const [address, setAddress] = useState('')
  const [image, setImage] = useState('')

  
 

  // used to navigate from one component to another
  const navigate = useNavigate()

  const newParking = () => {
    // if (parkId.length == 0) {
    //   toast.warning('Please enter parkId')
    // } else
     if (parking_Name.length == 0) {
      toast.warning('Please enter parking_Name')
    } else if (location.length == 0) {
      toast.warning('Please enter location')
    } else if (slots.length == 0) {
      toast.warning('Please enter slots')
    } else if (address.length == 0) {
      toast.warning('Please enter your address details')
    } 
    else if (image.length == 0) {
        toast.warning('Please enter your image Url')
      } 
    else {
      const body = {
        parkId,
        parking_Name,
        location,
        slots,
        address,
        image
      }

     
      const url = `${URL}/parking/add`

      
      axios.post(url, body).then((response) => {
        
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Successfully  added new Area')

          // navigate to the signin page
          navigate('/admin')
        } else {
          toast.error(result['error'])
        }
      })
    }
  }

  return (
    <div>
          <NavBar />
      <br></br>
      <h1>ADD New Parking</h1>
      <br></br>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            {/* <div className="mb-3">
              <label htmlFor="" className="label-control">
              ParkId
              </label>
              <input
                onChange={(e) => {
                  setParkId(e.target.value)
                }}
                type="number"
                className="form-control"
                
              />
            </div> */}

            <div className="mb-3">
              <label htmlFor="" className="label-control">
              parking_Name
              </label>
              <input
                onChange={(e) => {
                  setParking_Name(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
              location 
              </label>
              <input
                onChange={(e) => {
                  setLocation(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                slots
              </label>
              <input
                onChange={(e) => {
                  setSlots(e.target.value)
                }}
                type="number"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Address
              </label>
              <input
                onChange={(e) => {
                  setAddress(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Image URL
              </label>
              <input
                onChange={(e) => {
                  setImage(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>


            <div className="mb-3">
              
              <br></br>
              <br></br>
              <button onClick={newParking} className="btn btn-primary">
                Add New area
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
        <br />
        <br />
    <div className="row"> <Footer/></div>
    </div>
  )
}

export default NewParking