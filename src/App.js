import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Home from"./pages/Home";
import Doctors from "./pages/Doctors";
import AboutUs from "./pages/AboutUs";
import Appointments from "./pages/Appointments";
import {HashRouter as Router,Routes,Route} from "react-router-dom";
//we will create a use context in the main parent component that is the app.js in this case 
//to share the doctors list that needs to be accessed in Home (to display 4 doc from the list)
//and doctors page where we need to display all available doctors
//and finally in the appointment page where we need to access a doctor in order to finalized the booking
import { createContext } from "react";
import doctorlist  from "./data/doctorlist";
export const DoctorContext=createContext();
function App() {
  return (
    <DoctorContext.Provider value={{doctorlist}}>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/aboutUs" element={<AboutUs/>}></Route>
          <Route path="/appointments" element={<Appointments/>}></Route>
          <Route path="/doctors" element={<Doctors/>}></Route>
        </Routes>
      </Router>
    </DoctorContext.Provider>
  );
}

export default App;
