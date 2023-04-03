import React, { useState } from 'react';

const FunctionBased = () => {
    let [user,setUser]=useState()
    let[pass,setPass]=useState()

   let handleChange=(e)=>{
        e.preventDefault()
        console.log(user,pass);
        
    }
    return (
            <>
            <form action="">
                <label htmlFor="username">UserName</label>
                <br />
                <input type="text" id='username' onChange={(e)=>{
                    setUser(e.target.value)
                }} />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input type="text" id='password' onChange={(e)=>{
                    setPass(e.target.value)
                }}/>
                <br />
                <button onClick={handleChange}>Submit</button>
            </form>
            </>
    );
}

export default FunctionBased;
