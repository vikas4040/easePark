import './AdminNavbar.css'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'


const AdminNavbar = () =>{


    const navigate = useNavigate()

    const name = sessionStorage.getItem("firstName")

    return(
        <div >
          
      <div className="navigation-bar ">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid" >
          <a className="navbar-brand" href="#">
            Admin Panel
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Parkings
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/user">
                  Users
                </Link>
              </li>

            </ul>
          </div>
 
          <div className="col">
              <div className="float-end">
               
              </div>
            </div>

        </div>
      </nav>
      </div>
    </div> 

    )
}

export default AdminNavbar;