import "../styles/NavBar.css";
import {Link} from "react-router-dom";
import  LocalHospitalIcon  from "@mui/icons-material/LocalHospital";
import LogoutIcon from "@mui/icons-material/Logout"

const NavBar=()=>{
    //this method is when the user clicks at the mui icon that is the logout icon 
    //we cant clear the local storage because clearing it means deleting all new users that were saved to it 
    //so instead of clearing it entirely we remove this specific user we already saved that they are loged (using the password)
    //we remove the item that we already added to the local storage
    const onLogOut=()=>{
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userEmail");
    }
    //remove is logged in removes the login status
    //remove useremail removes the email corressponding to the loged in user (rn)
    return(
        <nav className="navbar">
            <Link to="/home" className="navbar-logo">
             <span className="logo-icon">
                <LocalHospitalIcon/>
             </span>
             <span>
                Al shifaa 
                <small>Medical Center</small>
             </span>
            </Link>

            <div className="navbar-links">
              <Link to="/home">Home</Link>
              <Link to="/aboutUs">About Us</Link>
              <Link to="/appointments">Appointments</Link>
              <Link to="/doctors">Doctors</Link>
            </div>
            <div className="navbar-logout">
                <Link to="/" onClick={onLogOut}>
                  <LogoutIcon/>
                </Link>
            </div>
        </nav>
    );
}
export default NavBar;