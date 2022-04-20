import React from "react"
import logo from "../pages/Main/carlogo.svg"
import '../pages/Signin'
import { Link } from "react-router-dom"
import "../Style/header.css"
const Header1=()=>{
    return(
        <div>
             <header>
             {/* <Link  to="/home">   
                 <img id="logo" src={logo}/>
                 </Link>
             <Link className="links" to="/home">   
                 <span id="siteName">EasePark</span>
                 </Link> */}
                  <a className="textlogo  navbar-brand" href="/home">EasePark</a>
              <a className="carlogo navbar-brand" href="/home"><img className="logo" src={logo} alt="car.svg"></img></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
                 
           
                
                 
             </header>
        </div>
    );
}
export default Header1