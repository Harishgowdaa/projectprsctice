import React from 'react';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const Toast = () => {
let notify=()=>{
    toast.success("this is warning",{position:toast.POSITION.TOP_CENTER })
}
    return (
       <>
       <ToastContainer/>
            <button onClick={notify}>click here to notify</button>
       </>
    );
} 
export default Toast;
