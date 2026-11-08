import {useState,useContext,useEffect} from "react";
import { DoctorContext } from "../App";
import "../styles/Appointments.css";
const Appointments=()=>{
  useEffect(()=>{
    document.title="Appointments| AL SHIFAA";

  },[]);
  const {doctorlist}=useContext(DoctorContext);
  const [specialty,setSpecialty]=useState("");
  //filered doctors contains the array of doctors who have the same specialty (matches to the search)
  const [filteredDoctors,setFilteredDoctors]=useState([]);
  //selecteddoctor contains the one specific doctor that the user chooses from the list of doctors
  const [selectedDoctor,setSelectedDoctor]=useState(null);
  const [showForm,setShowForm]=useState(false);
  //these 2 usestates are used for the form (to read the values the user inputs to book an appointment)
  const [patientName,setPatientName]=useState("");
  const [appointmentDate,setAppointmentDate]=useState("");
  //methods that occure when buttons are clicked
  //we start with handeling the search to return the list of doctors whos specialty match
  //iterate on the list of doctors and check if the spiacty match to the one the user has entered
  //if so it must be returned in the variable result
  const handleSearch=()=>{
    const result=doctorlist.filter((doctor)=>{
      return doctor.specialty===specialty;
    });
    //now that we have all matching results now we change the value of filtered doctors
    setFilteredDoctors(result);
  }

  //the second function needed it when the user clicks on book button 
  //we change the value of the selected doctor then we have to open the form 
  //change setShowForm to true
  const handleBooking=(doctor)=>{
    setSelectedDoctor(doctor);
    setShowForm(true);
  }

  //the third method needed is the one to confirm the booking this occurs when the user clicks on the confirm btn inside the form
  //when the confirm btn is pressed we should notify the user that the appointment with the selected doctor is booked successfully and the appointment date using an alert
  //and then everything back to initial state so that next patient can book 
  //we check first if name and date are empty display an alert to notify the useer that they should 
  //enter name plus date
  const handleConfirm=(e)=>{
    e.preventDefault();
    if(patientName.trim()===""||appointmentDate===""){
      alert("please enter your name and a suitable date preior to confirming your appointment");
      return;
    }
    alert(`Appointment confirmed with ${selectedDoctor.name} on ${appointmentDate}`);
    setPatientName("");
    setAppointmentDate("");
    setSelectedDoctor(null);
    setShowForm(false);
  }
  //this method is when the user clicks on the cancel button inside the form that allows them to bbok
  const handleCancelBooking=()=>{
    setShowForm(false);
    setSelectedDoctor(null);
    setPatientName("");
    setAppointmentDate("");
  }

  //we need an additional method so that when the value of the select changed (onChange event)
  const onSpecialtyChange=(e)=>{
    setSpecialty(e.target.value);
  }

  //we need a method to display the value of the patient name when changed
  const onPatientNameChanged=(e)=>{
    setPatientName(e.target.value);
  }
  //a method to display the new value of the date in the inppput after the user selects a date
  const onAppointmentDateChanged=(e)=>{
    setAppointmentDate(e.target.value);
  }
  return(
    <div className="appointments">
      <h1>Book an appointment ONLINE</h1>
      <div className="search-doctor">
        <select value={specialty} onChange={onSpecialtyChange}>
          <option value="">Select Specialty</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
          <option value="Neurologist">Neurologist</option>
          <option value="Pediatrician">Pediatrician</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Oncologist">Oncologist</option>
        </select>

        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="doctors-list">
        {filteredDoctors.map((doctor,index)=>(
          <div className="doctord-card" key={index}>
            <img src={doctor.image}></img>
            <h4>{doctor.name}</h4>
            <p>{doctor.specialty}</p>
            <p>{doctor.experience}</p>
            <p>⭐ {doctor.rating}</p>
            <p>{doctor.reviews}</p>
            <button onClick={()=>handleBooking(doctor)}>Book Appointment</button>
          </div>
        )
        )}
      </div>

      {showForm===true &&(
       <div className="appointment-form">
         <h3>Book with dr. {selectedDoctor.name}</h3>
         <form >
           <input type="text" placeholder="please enter your name" value={patientName} onChange={onPatientNameChanged}></input>
           <input type="date" placeholder="please enter desired date" value={appointmentDate} onChange={onAppointmentDateChanged}></input>
           <button type="button" onClick={handleConfirm}>Confirm appointment</button>
           <button type="button" onClick={handleCancelBooking}>Cancel appointment</button>
         </form>
       </div>
      )}
    </div>
    
  );
}
export default Appointments;
