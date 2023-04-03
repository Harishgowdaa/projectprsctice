import React, { Component, createRef } from 'react'

export default class App1 extends Component {
   constructor(){
    super()
    this.state={userName:"DOM Way"}
    this.h1Ref=createRef()
   } 
   componentDidMount(){
    let h1=document.querySelector('h1')
    console.log(h1);
    console.log(this.h1Ref.current,"React Way");
    
   }   

  render() {
    return (
      <>
      <h1 ref={this.h1Ref}>{this.state.userName}</h1>
      </>
    )
  }
}
