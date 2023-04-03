import React, { Component } from 'react'

export default class App1 extends Component {
constructor(){
    super()
    this.state={userName:""}
}
componentDidMount(){
    let btn=document.querySelector('input')
    btn.addEventListener("keypress",(e)=>{
        this.setState({userName:e.target.value})
    })
}

  render() {
    return (
      <>
      <h1>{this.state.userName}</h1>
        <input type="text" />
      </>
    )
  }
}
