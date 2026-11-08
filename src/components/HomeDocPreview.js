//instead of importing the doctors list we only import the context that we created in the app page 
import { useContext } from "react";
import { DoctorContext } from "../App.js";
//we need to import link because when the user clicks on view more doctors we need to move then to doctors page 
import {Link} from "react-router-dom";
//we also need to import the doctor card component
import DoctorCard from "./DoctorCard.js";
//this component works the same as Services component
import "../styles/Doctors.css";

const HomeDocPreview=()=>{
    const {doctorlist}=useContext(DoctorContext);
    return(
        <div className="doc-section"> 
           <div className="doc-header">
               <h3>Our Expert Doctors</h3>
               <Link to="/doctors">View All Doctors</Link>
           </div>
           <div className="doc-grid">
               {doctorlist.map((doctor,index)=>{
                if(index<4){
                 return(
                    <DoctorCard
                    key={index}
                    name={doctor.name}
                    specialty={doctor.specialty}
                    rating={doctor.rating}
                    review={doctor.reviews}
                    experience={doctor.experience}
                    image={doctor.image}
                    />
                 );
                }

               } )}
           </div>
        </div>
    );
}
export default HomeDocPreview;