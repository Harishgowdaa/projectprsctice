import React, { Component } from 'react'

export default class ClassBased extends Component {
  render() {
    return (
      <>
        <form action="">
            <label htmlFor="username">UserName</label>
            <br />
            <input type="text" id='username' />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="text" id='password' />
            <br />
            <button onClick={(e)=>{
                e.preventDefault()
                let username=document.getElementById("username").value
                let password=document.getElementById("password").value
                console.log({username,password});
            }}>Submit</button>
        </form>
      </>
    )
  }
}
