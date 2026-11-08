import {useState,useEffect} from "react";
import "../styles/SignIn.css";
import usersData from "../data/Users.js";

const SignIn=()=>{
    useEffect(()=>{
        document.title="Sign In | AL SHIFAA";

    },[]);
    const [name,setName]=useState("");
    const[email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [phonenb,setPhone]=useState("");
    const [error,setError]=useState("");
    //the users use state should read from the local storage not from the file beacuse we want to access the users that we newely registereed not only the ones 
    //that were statically added in the users list 
    const [users,setUsers]=useState(()=>{
        return JSON.parse(localStorage.getItem("allUsers"))||usersData;
    });
    //we retreive all previously registered users using local storage.getItems
    //then this stored jason should be parsed into a js array
    //in case no users are added other than the initial static data we retreive the initial static data


    const onNameChanged=(e)=>{
        setName(e.target.value);
    }
    const onEmailChanged=(e)=>{
        setEmail(e.target.value);
    }
    const onPhoneChanged=(e)=>{
        setPhone(e.target.value);
    }
    const onPassChanged=(e)=>{
        setPassword(e.target.value);

    }
    const confirmBtnHandler=()=>{
        //redo all prev steps in the login we need to validate all the inputs 
        //that the user has has inputed 
        //we it shows any invalid data show an error message else we create a new 
        //user and add it to the list of users that we previousely created
        //first step is to check if the fields are empty 
        if(name===""||email===""||password===""||phonenb===""){
            setError("all fields are required they shall not be empty ");
        }
        //step2:fields are not empty we need to need to check if they have valid values 
        //we start with the name it shouldnt be less than 2 characters
        else if (name.length<2){
            setError("name must contain more than 2 characters ");
        }
        //validate the email 
        else if (!email.includes("@")){
            setError("email must include @");
        }
        //validate the pasword shouldnt be less than 6
        else if (password.length<6){
            setError("password should have 6 characters at least ")
        }
        //validate phone nb 
        else if (phonenb.length<8){
            setError("phone nb must be 8 digits")
        }
        //step 3 :after the input fields data is validated we should make sure that the user did not enter 
        //an already existing account if it already exist set the error else 
            //we add the user to users list 
        else {
            let userExists=false;
            users.forEach(user => {
                if(user.email===email){//no need to check all fields bcz emails are not repetitives 
                    userExists=true;
                }  
            });
            if(userExists===true){
                setError("user Already exists")
            }
            else {
             //user does not exist add it 
             //creat a user object that takes all the inputs
             const newUser={
                id:users.length+1,
                name:name,
                email:email,
                password:password,
                phone:phonenb
             };

             //after the object is created it shall be added to the list of users 
             // take into consideration that we do not want to delete any past users 
             // only add to the list do not use push
             //i want to save all new users to the local storage so that when we go back to login page 
             //login can read all new data(users that we added)

             const updatedUsers=[...users,newUser];
             setUsers(updatedUsers);
             localStorage.setItem("allUsers",JSON.stringify(updatedUsers));
             setError("");
            }
        
        }
    }


    return(
        <div className="signin-container">
            <div className="sigin-header">
                <h1 className="signin-header">Join Our Family</h1>
                <p className="sigin-subtitle">sign in </p>
            </div>
            <div className="signin-inputs"> 
                <input type="text" value={name} onChange={onNameChanged} placeholder="Enter your full name "/>                
                <input type="text" value={email} onChange={onEmailChanged} placeholder="enter your email"/>
                <input type="text" value={password} onChange={onPassChanged} placeholder="select a password"/>
                <input type="text" value={phonenb} onChange={onPhoneChanged} placeholder="enter your phone nb "/>
            </div>
            <div className="signin-btn">
                <button onClick={confirmBtnHandler}>Confirm SignIn</button>
            </div>

            <p className="signin-error">{error}</p>
            
        </div>
        

    
    );
}
export default SignIn;