import Header from "./Header1"
import Profile from "./ProfileButton"
import "../Style/navbar.css"

const NavBar=()=>{

    return(
        <div  className=" navbar row"  >
            <div className=" col-sm-10">
              <Header />
            </div>
            <div className="col-sm-2">
              <div style={{marginTop: "10px"}}><Profile /></div>
            </div>
            {/* <hr style={{borderBottom: "4px",borderStyle:"solid"}}/> */}
        </div>

    )
}

export default NavBar