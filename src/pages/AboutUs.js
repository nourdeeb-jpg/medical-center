import  Footer from  "../components/Footer";
import "../styles/About.css";
import Aboutpic from "../images/Aboutpic.jpeg";
import AboutValues from "../components/AboutValues";
import {useEffect} from "react";

const AboutUs=()=>{
    useEffect(()=>{
     document.title="About Us | AL SHIFAA ";
    },[]);
    return(
        <div className="about-container">
            <div className="about-banner">
                <p> Al SHIFAA MEDICAL CENTER</p>
                <h1>who we are</h1>
                <span>Blendingadvanced expertise with compassionate care to transform healthcare in lebanon and beyond</span>
            </div>
            <div className="about-story"> 
                <span>Our Story</span>
                <h2>Pioneering Healthcare</h2>
                <p>Al Shifaa Medical center is a beacon of healthcare excellence in tyre and the region
                    We seamlessly blend advanced medical expertise with compassionate care
                </p>
                <div className="about-img">
                    <img src={Aboutpic} alt="medical center"></img>
                </div>
                <AboutValues/>
                <Footer/>
              

            </div>
        </div>
    );
}
export default AboutUs;