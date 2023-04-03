import React, { useRef } from 'react'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
import STYLE from './Signup.module.css'

const Signup = () => {
let navigate=useNavigate()

  let name=useRef()
  let email=useRef()
  let password=useRef()

  return (
    <>
    <ToastContainer/>
    <div id={STYLE.main}>
    <h1 id={STYLE.heading}>Signup Page</h1>
      <form action="" id={STYLE.form}>
        <label htmlFor="username" id={STYLE.label}>UserName</label>
           <input type="text" id='username' placeholder='Name' ref={name} className={STYLE.input}/><br />
        <label htmlFor="email" id={STYLE.label}>Email</label>
           <input type="text" id='email' placeholder='Email' ref={email} className={STYLE.input}/><br />
        <label htmlFor="password" id={STYLE.label}>Password</label>
           <input type="password" id='password' placeholder='password' ref={password} className={STYLE.input}/>
        <button type='reset' id={STYLE.cancel}>Cancel</button>
             
        <button onClick={(e)=>{
          e.preventDefault()
      if(name.current.value&&email.current.value&&password.current.value){
          localStorage.setItem("Name",name.current.value)
          localStorage.setItem("Email",email.current.value)
          localStorage.setItem("Password",password.current.value)
          navigate('/login')
      }else{
        toast.error("Please Fill All Details",{position:toast.POSITION.TOP_CENTER})
        }    
        }} id={STYLE.signup} >Signup</button>
        
      </form>
      <button onClick={(e)=>{
          e.preventDefault()
          navigate('/login')
        }} id={STYLE.btnlogin} >Click here to Login</button>
      </div>
    </>
  )
}
export default Signup