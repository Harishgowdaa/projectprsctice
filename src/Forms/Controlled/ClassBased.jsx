import React, { Component } from 'react'

export default class ClassBased extends Component {
  constructor(){
    super()
    this.state={username:"",
                password:""}
  }
  handleChange=(e)=>{
    e.preventDefault()
    let{username,password}=this.state
    console.log(username,password);
  }
  render() {
    return (
      <>
          <form action="">
            <label htmlFor="userName">UserName</label>
            <br />
            <input type="text" id='userName' onChange={(e)=>{
              this.setState({username:e.target.value})
            }} />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="text" id='password' onChange={(e)=>{
              this.setState({password:e.target.value})
            }} />
            <br />
            <button onClick={this.handleChange}>Submit</button>
          </form>
      </>
    )
  }
}
