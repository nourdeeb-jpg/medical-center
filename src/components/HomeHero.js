import heroImg from "../images/hero.jpeg";
import "../styles/HomeHero.css";
import {Link} from "react-router-dom";
const HomeHero=({setShowDoctor})=>{

    const findDoctorBtnClicked=()=>{
        setShowDoctor(true);
    }
    return(
        <div className="hero-container">
            <img src={heroImg} alt="al shifaa Medical center" className="hero-img"/>
            <div className="hero-txt">
                <h3>Your Health Is Our Top Priority</h3>
                <h1>Providing you with expert healthcare for a healthier future</h1>
                <p>With care and Love we provide our services to garuntee your satisfaction</p>
            </div>
            <div className="hero-btns">
                <Link to="/appointments">
                   <button>Book an Appointment</button>
                </Link>
                <button onClick={findDoctorBtnClicked}>Find Your top Doctor </button>
            </div>
        </div>
    );
}
export default HomeHero;