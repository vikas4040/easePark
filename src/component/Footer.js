
import React from "react";
import "../Style/footer.css"

const Footer = () => {
  return (
    <>
      <footer className=" d-flex justify-content-center" style ={{height:"3rem"}}>
       
        <div class="container">
        <div className="footer   bg-dark">
          <div className="row py-3">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="ancor col-6 col-lg-3 text-center">
                  <h2 className="text-white fs-3">About Us</h2>
                      <a href="#">About</a>
                    
                   
        
                </div>

                <div className="ancor col-6 col-lg-3 text-center">
                  <h2 className="text-white fs-3">Support</h2>
                  
                    
                      <a href="#">About</a>
                    
        
        
                </div>

                <div className="ancor col-6 col-lg-3 text-center">
                  <h2 className="text-white fs-3">Services</h2>
                  
                    
                      <a href="#">About</a>
                    
                   
        
                </div>

                <div className="col-6 col-lg-3 text-center">
                  <h2 className="text-white fs-3">Follow Us</h2>
                  <div className="row">
                    <div className="ancor col-3 mx-auto">
                      <a href="#"><i class="fab fa-facebook-f fontawesome-style"></i></a>
                  
                    </div>
                    <div className="ancor col-3 mx-auto">
                      <a
                        href="https://www.instagram.com">
                        <i class="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="ancor col-3 mx-auto">
                     <a href="#"> <i class="fab fa-youtube fontawesome-style"></i></a>
                    
                    </div>
                    <div className="ancor col-3 mx-auto">
                    <a href="#"><i class="fab fa-twitter fontawesome-style"></i></a>
                      
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
              <div className=" ">
                <p className="main-hero-para d-flex text-secondary p-3 justify-content-start  text-center w-100 text-secondary fs-5">
                  Copyright @ 2021 EasePark. All rights reserved.
                </p>
              </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;