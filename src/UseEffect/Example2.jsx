import React, { useEffect, useState } from 'react'

const Example2 = () => {
    let [width,setWidth]=useState(width.innerWidth)

    useEffect(()=>{
            window.addEventListener("resize",()=>{
                setWidth(window.width)
            })
    },[width])

  return (
    <>  
   <h1>{width}</h1>

    </>
  )
}

export default Example2