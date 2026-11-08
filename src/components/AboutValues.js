import "../styles/About.css";
import  valuesList from "../data/ValuesList.js";
const AboutValues=()=>{
    return(
        <div className="about-values">
            <span>What guides us</span>
            <h3>Core Values</h3>
            <div className="about-grid">
                {valuesList.map((value,index)=>(
                    <div key={index} >
                        <span>{value.icon}</span>
                        <p>{value.title}</p>
                        <p>{value.text}</p>
                    </div>   
                )   
                )
                }
            </div> 
        </div>
    );
}
export default AboutValues;