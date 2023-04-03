import React from 'react'
import Hoc from './Hoc'
const App = (props) => {
  return (
   <>{props.data}</>
  )
}

export default Hoc(App) 