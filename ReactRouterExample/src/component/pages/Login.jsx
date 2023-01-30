
import React,{useState} from 'react'
import {Navigate, useNavigate} from 'react-router-dom'




function Login() {
    const [name ,setName]=useState("");
    const [password ,setPassword]=useState("");
    
    const navigate=useNavigate();

    
        const login = (event)=>{
            
        console.log("Login");
        if(name.toLowerCase()==="admin" && password==="admin"){
            navigate('/admin');
        }else{
            navigate('user');
        }
       
        }
        const setUserName = (event)=>{
           console.log(event.target.value);
           if(event.target.value){
            setName(event.target.value);
           }
        }
        const setUserPassword = (event)=>{
            console.log(event.target.value);
            if(event.target.value){
             setPassword(event.target.value);
            }
         }
  return (
      
    <div>
        <input type="text" placeholder="Enter your name" onBlur={setUserName}></input> 
         <input type="password" placeholder="Enter your password" onBlur={setUserPassword}></input>
        <button onClick={login}>Login</button>



    </div>

  )
}

export default Login