import "../styles/Services.css";
import   serviceslist from"../data/ServicesList.js"
import ServiceCard from "./ServiceCard.js";
const Services=()=>{
    return(
        <div>
            <div className="services-txt">
                <h5>OUR SERVICES</h5>
                <h1>Comprehensive HealthCare Services</h1>
                <p>From simple online consultations to more elaborated treatments, we make sure to provide you and your beloved ones with toptier services</p>
            </div>
            <div className="services-grid">
                {serviceslist.map((service,index)=>(
                    <ServiceCard key={index}
                       icon={service.icon}
                       title={service.title}
                       description={service.description}
                    />   
                 ) )}
            </div>
        </div>
    );
}
export default Services;