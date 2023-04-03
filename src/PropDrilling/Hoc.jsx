import React from 'react'

const Hoc = () => {
  return ((WrappedComponent)=>{
        <WrappedComponent data="hello" />
  }
  )
}

export default Hoc