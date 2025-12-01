import React, { Component } from 'react'
import Child2 from './Child2'
import Child1 from './child1'

export class App extends Component {


  state={  //  it is an object that holds information about the comp
      change:false
  }

  handleChange=()=>{
    this.setState({change:!this.state.change})
    console.log("change method working ")

  }


  render() {
    return (
      <div>   


        {this.state.change?<Child2/>:<Child1/>}




        <button onClick={()=>this.handleChange()}>Change Comp</button>



      </div>
    )
  }
}

export default App