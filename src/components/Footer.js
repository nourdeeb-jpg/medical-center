import "../styles/Footer.css";
import {Link} from "react-router-dom";

// for icons found at contact us part in thr footer
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// for social media icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';

// for the logo at the start of the footer 
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
const Footer=()=>{
    return(
        <div className="footer">
            <div className="footer-content">
              <h4>
                <MedicalServicesIcon/>
                Al naqaa Medical Center
              </h4>
              <p>we take care of you and your beloved ones</p>   
            </div>

            <div className="footer-social">
                <FacebookIcon/>
                <InstagramIcon/>
                <GoogleIcon/>
            </div>

            <div className="footer-navigate">
                <h3>Quick Links</h3>
                <Link to="/aboutus">About US</Link>
                <Link to="/appointments">Appointments</Link>
                <Link to="/doctors">Doctors</Link>
            </div>

            <div className="footer-contact">
                <h2>CONTACT US</h2>
                <p><LocationOnIcon/>Tyre Main Road,South Lebanon</p>
                <p><PhoneIcon/>+961 71 675 345</p>
                <p><EmailIcon/>AL.Shifaa.Med@gmail.com</p>
                <p><AccessTimeIcon/>MON-SAT: 10AM-9PM</p>
            </div>

        </div>  
    );
}
 
export default Footer;