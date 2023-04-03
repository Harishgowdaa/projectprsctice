import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()
        this.state={userName:""}
    }
  render() {
    return (
      <>
        <h1>{this.state.userName}</h1>
        <input type="text" onChange={(e)=>{
            this.setState({userName:e.target.value})
        }} />
      </>
    )
  }
}
