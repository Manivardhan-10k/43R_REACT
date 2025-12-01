import React, { Component } from 'react'

class Child1 extends Component {

constructor(){
    super()
    this.timer=setInterval(() => {
        console.log("from child 1");    
    }, 1000);

}
componentWillUnmount(){
    clearInterval(this.timer)
}
  render() {
    return (
      <div>
        <h1>child1</h1></div>
    )
  }
}

export default Child1