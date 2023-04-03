import React, { useRef } from 'react'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
import STYLE from "./Login.module.css"

const Login = () => {
let navigate=useNavigate()

const email=useRef()
const password=useRef()

  const localEmail=localStorage.getItem("Email")
  const localPassword=localStorage.getItem("Password")  

  return (
    <>
    <ToastContainer/>
     <div id={STYLE.main}>
        <h1 id={STYLE.heading}>Login Page</h1>
      <form action="" id={STYLE.form} >
        <label htmlFor="email" id={STYLE.label}>Email</label>
           <input type="text" id='email' placeholder='Email' ref={email} className={STYLE.input}/><br />
        <label htmlFor="password" id={STYLE.label}>Password</label>
           <input type="password" id='password' placeholder='Password' ref={password} className={STYLE.input}/><br />
        <button type='reset' id={STYLE.cancel}>Cancle</button>
        <button onClick={(e)=>{
            e.preventDefault()
         if(email.current.value==localEmail&&password.current.value==localPassword){
             toast.success("Login Success",{position:toast.POSITION.TOP_CENTER})
             navigate('/about') 
         }else{
            navigate('/login')
            toast.error("Please Fill All Details",{position:toast.POSITION.TOP_CENTER})
        }
        }} id={STYLE.login}>Login</button>
      </form>
      <button onClick={(e)=>{
          e.preventDefault()
          navigate('/signup')
        }} id={STYLE.btnsignup}>Click here to signup</button>
      </div>
    </>
  )
}

export default Login