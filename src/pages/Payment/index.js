import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { URL } from "../../config";
import moment from "moment";
import { Navigate, useLocation } from "react-router";
import { useNavigate } from "react-router";
// import Pay from '../../components/paymentComponent'
import payImg from '../../assert/payment.png'
import Header1 from './../../component/Header1';
import NavBar from './../../component/NavBar';
import Footer from "../../component/Footer";
const Payment = () => {
    const {state} = useLocation()
    const bookingId=state.bId
    const entryTime=state.entryTime
    const exitTime=state.exitTime
    const status="paid"
    const navigate=useNavigate()
 
    console.log("hhhhhhhh  "+state)
    //console.log("hhhhhhhh  "+bId)
    const firstName = sessionStorage['firstName']
    const lastName = sessionStorage['lastName']
    const email = sessionStorage['email']
    const [amount, setTotal] = useState('')
    
    const [show,setShow]=useState(false)
     console.log()
    useEffect(() => {
        getPrice()
    }, [])
    // const getData = () => {
    //     const price = 
    // }
   
    const getPrice = () => {
        axios.get(`${URL}/payment/addPayment/${bookingId}`).then((response) => {
            const result = response.data;
            console.log("GGGGGG "+result.data);
            setTotal(result.data)

        })
    }
    const styles = {
        container: {
            backgroundColor: 'white',
            height: '600px',
            width: '600px',
            marginTop: '2%',
            marginBottom: '2%',
        }


    }
const deleteBooking=()=>{
    axios.delete(`${URL}/booking/delete/${bookingId}`).then((response) => {
            const result = response.data;
            if (result.status === "success") {
                console.log(result.data);
                toast.error('Booking canceled !')
                navigate('/home')
            }
        })
}
 const makePayment=()=>{
    
     const body=
     {
        amount,
       status,
        bookingId
     }
     console.log(amount)
     console.log(status)
    //  console.log(bookingId)
     
    axios.post(`${URL}/payment/add`,body).then((response) => {
    
 })
}
    return (
        <div>

            <div className="wrapper" >
                <NavBar/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-md-5">
                            <div className="card cotent shadow-lg mt-2 mb-2 bg-white rounded">
                                <div className="class-header">
                                </div>
                                <div className="class-body" style={{ padding: '15px' }}>
                                    <div className="row form-group">
                                        <div className="col-12">
                                            <center>
                                                <img src={payImg}></img>
                                            </center>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-12">
                                            <center>
                                                <h4> BOOKING CONFIRMED!</h4>
                                            </center>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-12">
                                            <table className="table table-striped ">
                                                <thead>
                                                    <tr className="bg-info">
                                                        <td>BOOKING ID:</td>
                                                        <td></td>
                                                        <td><strong>{bookingId}</strong></td>
                                                        <td>COUNTRY:</td>
                                                        <td></td>
                                                        <td><strong>INDIA</strong></td>

                                                    </tr>
                                                </thead>
                                                <tbody className="col-10">
                                                    <tr >
                                                        <td>USER NAME:</td>
                                                        <td></td>
                                                        <td><strong>{firstName} {lastName}</strong></td>
                                                       
                                                    </tr>
                                                    <tr>
                                                    <td>EMAIL:</td>
                                                        <td></td>
                                                        <td><strong>{email}</strong></td>
                                                    </tr>

                                                    <tr >
                                                        
                                                        <td>ENTRY-TIME</td>
                                                        <td></td>
                                                        <td><strong>{moment(entryTime).format("LLL")} </strong></td>

                                                    </tr>

                                                    <tr >
                                                        
                                                        <td>EXIT-TIME</td>
                                                        <td></td>
                                                        <td><strong>   {moment(exitTime).format("LLL")} </strong></td>

                                                    </tr>
        
                                                    <tr >
                                                        
                                                        <td>BILL AMOUNT</td>
                                                        <td></td>
                                                        <td><strong>{amount}</strong></td>

                                                    </tr>
                                        
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-6">
                                                <p>
                                                    <strong>CONTACT US</strong><br />
                                                    <div>
                                                        EasePark Parking Management: 6261012815
                    
                                                    </div>

                                                </p>
                                            </div>
                                            <div className="col-6">
                                                <p>
                                                    <strong>OFFICE ADDRESS</strong><br />
                                                    <div>
                                                        <strong>Address </strong> : EasePark Parking Service 
                                                        Management Nagpur
                                                        440016
                                                        <br />
                                                        <strong>Address 2</strong> : Hingana Road Nagpur
                                                    </div>

                                                </p>

                                            </div>
                                        </div>
                                
                                    </div>
                                    <div className="row">
                                        <div className="col"><button hidden={show} className="btn btn-primary" onClick={() => {
                                            makePayment()
                                             setShow(true)
                                             toast.success("BOOKING SUCCESSFUL!")

                                        }}>MAKE PAYEMENT</button></div>
                                        <div className="col">
                                            <button hidden={show} className="btn btn-danger" onClick={deleteBooking}>CANCEL BOOKING</button>
                                        </div>
                                        <div className="col">
                                        <div className="col">
                                            {(show && <button  className="btn btn-primary" onClick={() => {
                                               window.print()
                                            }}>PRINT INVOICE</button>)}
                                            </div>
                                        </div>
                                    </div>
 
                                </div>
                                <div className="card-footer">
                                    <div className="footer-copyright">&copy;2022 EasePark Parking Management</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <br/>
            <div className="row"> <Footer/></div>
        </div>
    )
}

export default Payment