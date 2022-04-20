import Signin from './pages/Signin'
import Signup from './pages/Signup'
import { HashRouter, Route, Routes, Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home'
import SecretQuestion from './pages/SecretQuestion'
import ForgotPassword from './pages/ForgotPassword'
import UpdateProfile from './pages/UpdateProfile'
import Profile from './pages/Profile'
import Parking from './pages/Parking'
import UserHistory from './pages/UserHistory'
import Booking from './pages/Booking'
import BookSlot from './pages/BookSlot'
import AdvBooking from './pages/AdvanceBooking'
import AdvBookSlot from './pages/AdvBookSlot'
import NewParking from './pages/NewParking/NewParking'
import EditParking from './pages/EditParking/EditParking'
import DeleteParking from './pages/EditParking/DeleteParking' 
import Admin from './pages/Admin/Admin'
import User from './pages/User/User'
import DeleteUser from './pages/User/deleteUser'
import Main from './pages/Main'
import Payment from './pages/Payment'

// import Time from './component/Time'
function App() {
  return (
    <div className="container">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/secretquestion" element={<SecretQuestion />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/updateprofile" element={<UpdateProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/parking" element={<Parking />} />
          <Route path="/userHistory" element={<UserHistory />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/bookSlot" element={<BookSlot />} />
          <Route path="/advBooking" element={<AdvBooking />} />
          <Route path="/advbookSlot" element={<AdvBookSlot />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/newParking" element={<NewParking />} />
          <Route path="/editParking" element={<EditParking />} />
          <Route path="/deleteParking" element={<DeleteParking />} />
          <Route path="/user" element={<User />} />
          <Route exact path="/deleteUser" element={<DeleteUser />} />
          <Route exact path="/main" element={<Main />} />
          <Route exact path="/payment" element={<Payment />} />

          
        </Routes>
      </HashRouter>
      <ToastContainer theme="colored" />

    </div>
  )
}

export default App