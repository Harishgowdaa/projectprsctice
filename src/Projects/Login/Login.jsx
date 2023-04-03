import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Home from './Home';
import "./login.css"

const Login = () => {
    const name=useRef()
    const email=useRef()
    const password=useRef()
    const [showHome,setShowHome]=useState(false)
    const [show,setShow]=useState(false)

     const localSignUp=localStorage.getItem("signUp")
     const localEmail=localStorage.getItem("email")
     const localPassword=localStorage.getItem("password")
     const localName=localStorage.getItem("name")
    useEffect(()=>{
     if(localSignUp){
         setShowHome(true)
     }
     if(localEmail){
         setShow(true)
    }
    })
    const signup=()=>{
        if(name.current.value&&email.current.value&&password.current.value)
       {
         localStorage.setItem("name",name.current.value)
         localStorage.setItem("email",email.current.value)
         localStorage.setItem("password",password.current.value)
         localStorage.setItem("signUp",email.current.value) 
         toast.success("Account Successfully Created",{position:toast.POSITION.TOP_CENTER})
         window.location.reload()
       }else{
        toast.error("Please Fill All Details",{position:toast.POSITION.TOP_CENTER})
       }
    }
 
    const login=()=>{
     if(email.current.value==localEmail&&password.current.value==localPassword){
         localStorage.setItem("signUp",email.current.value)
         toast.success("Login Success",{position:toast.POSITION.TOP_CENTER})
         window.location.reload()
     }else{
        toast.error("Please Enter Valid Details",{position:toast.POSITION.TOP_CENTER})
     }
    }
     return(
         <div>
            <ToastContainer/>
             {showHome?<Home/>:
             (show?
                <div id="main">
                        
                     <h1>Login Page</h1>
                         <p>Hi {localName}</p>
                         <div className="sub">
                             <input placeholder="Email" type='text' ref={email} />
                         </div>
                         <div className="sub">
                             <input placeholder="Password" type='password' ref={password} />
                         </div>
                         <button onClick={login}>Log In</button>
                 </div>
                 :
                 <div className="main">
                        <h1>SignUp Page</h1>
                         <div className="sub">
                             <input placeholder="Name" type='text' ref={name} />
                         </div>
                         <div className="sub">
                             <input placeholder="Email" type='text' ref={email} />
                         </div>
                         <div className="sub">
                             <input placeholder="Password" type='password' ref={password} />
                         </div>
                         <button onClick={signup}>Sign Up</button>
                 </div>)
             }
         </div>
     );
 }
export default Login;
