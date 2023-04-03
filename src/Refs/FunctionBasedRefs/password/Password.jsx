import React, { useState } from 'react';
import IMG from "./download.png"
  
const Password = () => {

let [password,setpassword]=useState()
let showpassword=()=>{
    if(password==true){
        setpassword(!true)
    }else{
        setpassword(!false)
    }
}
    return ( 
        <>
        <input id='a' type={password ? "text": "password"} />
        <img src={IMG} alt="" height="14px" width="14px" onClick={showpassword} />
        </>
    );
}
export default Password;
