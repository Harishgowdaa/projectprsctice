import React, { useRef, useState } from 'react';
import IMG from "./img.webp"
// import Button from 'react-bootstrap/Button';

const Example2 = () => {
let[photo,setPhoto]=useState(IMG)
let [loading,setLoading]=useState(true)
let imgRef=useRef()

let handleChange=()=>{
    if(loading==true){
        setLoading(!true)
        imgRef.current.style.borderRadius="25%"
        imgRef.current.style.border="2px solid purple"
    }else{
        setLoading(!false)
        imgRef.current.style.borderRadius="0"
        imgRef.current.style.border="none"
    }
}
    return (
        <div>
             {/* <Button variant="primary">Primary</Button>{' '} */}
             <img src={photo} alt="hulk" ref={imgRef} height="200px" width="200px"/>
             <button onClick={handleChange}>{loading ? "ON" :"OFF"}</button>   
        </div>
    );
}
export default Example2;



