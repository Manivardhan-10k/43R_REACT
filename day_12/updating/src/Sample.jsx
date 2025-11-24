import React, { Component } from 'react'

class Sample extends Component {


    componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Timer running...");
    }, 1000);
  }


    componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount: Timer cleared and component removed");
  }




  render() {
    return (
      <div> 

    Sample 1
      </div>
    )
  }
}

export default Sample