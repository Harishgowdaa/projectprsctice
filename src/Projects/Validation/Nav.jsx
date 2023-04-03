import React from 'react'
import { Link } from 'react-router-dom'
import STYLE from "./Nav.module.css"
const Nav = () => {
  return (
    <>
      <div id={STYLE.main}>
        <h1 id={STYLE.logo}>LOGO</h1>
        <div>
          <ol id={STYLE.nav}>
        <li><Link to="/" id={STYLE.content}>Home</Link></li>
        <li><Link to="/signup" id={STYLE.content}>Signup</Link></li>
        <li><Link to="/login" id={STYLE.content}>Login</Link></li>
        <li><Link to="/about" id={STYLE.content}>About</Link></li>
        </ol>
        </div>
      </div>
    </>
    )
}
export default Nav