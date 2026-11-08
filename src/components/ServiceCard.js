import "../styles/ServiceCard.css";
//in this component we display the structure of each individual card
//we display the icon for each service then the titlethen a small description
//after that in the services component we map over the list and use this card component to display 
//all services
const ServiceCard=({title,description,icon})=>{
    return(
        <div className="service-card">
            <p className="service-icon">{icon}</p>
            <p className="service=title">{title}</p>
            <p className="service-description">{description}</p>
        </div> 
    );
}
export default ServiceCard;