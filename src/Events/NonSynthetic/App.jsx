import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()
        this.state={userName:"Harish"}
    }
    componentDidMount(){
        let btn=document.querySelector('button')
        btn.addEventListener("click",()=>{
            this.setState({userName:this.state.userName="Gowda"})
        })
    }

  render() {
    return (
      <>
        <h1>{this.state.userName}</h1>
        <button>change</button>
      </>
    )
  }
}
