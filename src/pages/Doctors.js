import { useEffect } from "react";

const Doctors=()=>{
    useEffect(()=>{
        document.title="Doctors | AL SHIFAA";
    },[] );
    return(
        <div className="doctors-page">
            <h1>this is the doctors page</h1>
        </div>
    );
}
export default Doctors;