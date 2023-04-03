import React, { useEffect, useState } from 'react'

const Example1 = () => {

    let [count,setCount]=useState(0)

    useEffect(()=>{
        document.title=`you clicked ${count} times`
    },[count])
  return (
    <>
            <h1>{count}</h1>
            <button onClick={()=>{
                setCount(count + 1)
            }}>Increment</button>
    </>
  )
}

export default Example1