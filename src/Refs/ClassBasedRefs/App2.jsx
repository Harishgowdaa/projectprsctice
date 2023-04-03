import React, { Component, createRef } from 'react'

export default class App2 extends Component {
    constructor(){
        super()
        this.state={company:"Qspiders"}

        this.spanRef=createRef()
        this.btnRef=createRef()
    }

  render() {
    return (
      <div>
            <span ref={this.spanRef}>{this.state.company}</span>
            <br />
            <button ref={this.btnRef} onClick={()=>{
                this.setState({company:"Jspiders"})
                this.spanRef.current.style.color="red"
                this.spanRef.current.style.border="2px solid black"
                this.spanRef.current.style.padding="2px"
                this.spanRef.current.style.margin="20px"

                this.btnRef.current.style.color="red"
                this.btnRef.current.style.backgroundColor="black"
                this.btnRef.current.style.borderRadius="20%"
            }}>Change</button>
            
        </div>
    )
  }
}
