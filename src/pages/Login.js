import{useState,useEffect} from "react";
import Users from "../data/Users";
import { useNavigate } from "react-router-dom";
import "../styles/LogIn.css"
const Login=()=>{
    useEffect(()=>{
        document.title="Login | AL SHIFAA";
    },[]);
    const [email,setEmail]=useState("");
    const [userPass,setUserPass]=useState("");
    const [error,setError]=useState("");
    const navigate=useNavigate();
    const createAccBtnHandler=()=>{
        navigate("/signin");
    }
    const onEmailChanged=(e)=>{
        setEmail(e.target.value);
        
    }
    const onPassChanged=(e)=>{
        setUserPass(e.target.value);
    }
    const loginBtnHandler=()=>{
        if(email===""||userPass===""){
            setError("fill empty fields !!!");
        }
        else if(!email.includes("@")){
            setError("email shall include @ symbol");
        }
        else if(userPass.length<6){
            setError("password must be 6 characters");
        }
        else{
            //we want to retreive data from the local storage instead of the usersData.js file
            //first get all users 
            //we create a new var that contains all the users taht are found in the local storage (new users) if not found we return the users that were 
            //statically entered

            const allUsers=JSON.parse(localStorage.getItem("allUsers"))||Users;
            var userFound=false;
            allUsers.forEach((user)=>{
                if(user.email===email&&user.password===userPass){
                    userFound=true;
                }
            });

            if (userFound){
                setError("");
                localStorage.setItem("isLoggedIn","true");
                localStorage.setItem("userEmail",email);
                navigate("/home");
            }
            else{
                setError("user not found");
                navigate("/signin");//because we didnt find the user 
            }
        }
    }

    return(
        <div className="login-container">    
            <div className="login-card">
                <h1>Welcome To Al Shifaa Medical Center-Tyre</h1>
                <span>please login to your account</span>
            </div>
            <div className="inputs-group">
                <input type="text"  value={email} placeholder="email:" onChange={onEmailChanged}/>
                <input type="password" value={userPass} placeholder="password:" onChange={onPassChanged}/>
            </div>
            <p className="error-box">{error}</p>
            <div className="buttons-group"> 
                <button  className="login-btn" onClick={loginBtnHandler}>Login To Account</button>
                <button className="secondary-btn" onClick={createAccBtnHandler}>Create New Account</button>  
            </div>


        </div>
    );
}
export default Login;