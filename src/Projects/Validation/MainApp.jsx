import React from 'react'
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom'
import Nav from './Nav'
import Home from './component/Home'
import Login from './component/Login'
import Signup from './component/Signup'
import PageNotFound from './component/PageNotFound'
import About from './component/About'
const MainApp = () => {
  return (
    <Router>
      <Nav/>
        <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path="/login" element={<Login />}/>
              <Route  path="/signup" element={<Signup/>}/>
              <Route path="/about" element={<About/>} />
              <Route path="*" element={<PageNotFound/>} />
        </Routes>
    </Router>
  )
}
export default MainApp