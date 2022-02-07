import React from 'react'
import './App.css';

export default class App extends React.Component{
  
  constructor (props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  
  counterPlus = () => {
    this.setState(state => ({
      counter: ++state.counter
    }))
  }

  render (){
    return (
    <>
      <h1 onClick={this.counterPlus}>
        Hello {this.state.counter}
      </h1>
    </>
  )
  }
}