import React from 'react';
import { Link } from 'react-router-dom';


import "./index.css";
import mainImage from  './ease park main img.jpeg'
import logo from  './carlogo.svg'
import park from './parking.jpg'

function Main() {





  return (
    <div>
    
  
   
    {/* <link rel="stylesheet" href="../assets/css/bootstrap.min.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    /> */}
  
    <header className="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="container">
              <a className="textlogo  navbar-brand" href="#">EasePark</a>
              <a className="carlogo navbar-brand" href="#"><img className="logo" src={logo} alt="car.svg"></img></a>
              <button className="navbar-toggler btn-color-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
                <form className="nav ms-auto d-flex">
                  <button className="btn btn-outline-primary mx-2"><Link to="/signup" className="linkq">SignUp</Link>
                  </button>
                  <button className="btn btn-outline-primary mx-2"><Link to="/signin" className="link">LogIn.</Link>
                  </button>
                </form>
              </div>
            </div>
          </nav>
    </header>
    <main>
    <div className="">
      <div className="py-5 container border-bottom border-1 border-dark">
    <img  className="w-100 img-fluid" src={mainImage} alt=""/>
      </div>
    </div>
      <div className="container">
        <h2 className="text-center py-3 fw-bold" style={{color:"#343890"}}>How EasePark Works!</h2>
       <div className="row">
           <div class="col-md-6">
                <h4 className=" pb-3">Want One stop parking experience !</h4> 
                <h2>        EASE PARK is here</h2>
           </div>
           <div class="col-md-6">
           <img className="logo w-100 fluid-img" src={park} alt="parking.jpg"></img>
           </div>
           
       </div>
       
      </div>
    </main>
    <footer>
      <div className="footer container-fluid">
        <div className="container">
          <p className="text-secondary p-3 mb-0 text-center">Privacy  Cookies: This site uses cookies. By continuing to use this website, you agree to their use.</p>
        </div>
      </div>
    </footer>

    


    </div>
  );
}

export default Main;
