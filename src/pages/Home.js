import NavBar from "../components/NavBar";
import HomeHero from "../components/HomeHero";
import {useState,useEffect} from "react";
import Services from "../components/Services";
import HomeDocPreview from "../components/HomeDocPreview";
import Footer from "../components/Footer";
const Home=()=>{
    useEffect(()=>{
        document.title="Home | AL SHIFAA";

    },[]);
    const[showDoctor,setShowDoctor]=useState(false);
    return(
        <div>
            <NavBar/>
            <HomeHero setShowDoctor={setShowDoctor}/>
            <Services/>
            <HomeDocPreview/>
            <Footer/>
        </div>
    );
}
export default Home;