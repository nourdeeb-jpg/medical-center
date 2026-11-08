import "../styles/DoctorCard.css";
const DoctorCard=({name,specialty,rating,reviews,experience,image})=>{
    return(
        <div className="doctor-card">
            <div className="doctor-image">
                <img src={image} alt={name}></img>
            </div>
            <div className="doctor-info">
                <p>{name}</p>
                <p>{specialty}</p>
                <p>⭐ {rating}</p>
                <p>{reviews}</p>
                <p>{experience}</p>
            </div>
        </div>
    );
}
export default DoctorCard;