import React, { useRef } from 'react';

const FunctionBased = () => {

    let userRef=useRef()
    let passRef=useRef()

   let handleChange=(e)=>{
    e.preventDefault()
        let username=userRef.current.value
        let password=passRef.current.value
        console.log(username,password);
       
        userRef.current.value=""
        passRef.current.value=""
    }
    return (
        <>
           <form action="">
                <label htmlFor="userName">UserName</label>
                <br />
                <input type="text" id='userName' ref={userRef} />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input type="text" id='password' ref={passRef} />
                <br />
                <button onClick={handleChange}>Submit</button>
           </form>
        </>
    );
}
export default FunctionBased;
