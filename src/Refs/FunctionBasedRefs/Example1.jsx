import React, { useRef } from 'react';
const Example1 = () => {
    
let h1Ref=useRef()
let btnRef=useRef()

let handleChange=()=>{
    h1Ref.current.style.color="red"
    h1Ref.current.style.border="2px solid black"
    h1Ref.current.style.borderRadius="20%"

    btnRef.current.style.color="blue"
    btnRef.current.style.borderRadius="20%"
    btnRef.current.style.backgroundColor="black"
}
    return (
        <div>
               <h1 ref={h1Ref}>App Component</h1>
               <button onClick={handleChange} ref={btnRef} >Change</button> 
        </div>
    );
}
export default Example1;
