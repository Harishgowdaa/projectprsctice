import React, { Component, createRef } from 'react'

export default class ClassBased extends Component {
    constructor(){
        super()
        this.userRef=createRef()
        this.passRef=createRef()
    }
 handleChange=(e)=>{
    e.preventDefault()
       let username=this.userRef.current.value
       let password=this.passRef.current.value
        console.log({username,password});

        this.userRef.current.value=""
        this.passRef.current.value=""
      }
  render() {
    return (
      <>
        <form action="">
            <label htmlFor="username">UserName</label>
            <br />
            <input type="text" id='username' ref={this.userRef} />
            <br /><label htmlFor="password">Password</label>
            <br />
            <input type="text" id='password' ref={this.passRef} />
            <br />
            <button onClick={this.handleChange}>Submit</button>
        </form>
      </>
    )
  }
}
