//components


// -> Class based 
// -> function based

import React from "react"
class Demo extends React.Component{
//state
//it is a object that hold data about the component

  constructor(){
    super()
    // references the current class of the object
    this.state={
      name:"default user"
    }

  }
  ///add functions here 

  changeName=()=>{
    this.setState({name:"mani vardhan"})
  }

  render(){
    return (
      //entire jsx must be in a single parent tag
      <div>
        <h1>Welcome to the app {this.state.name}</h1>
        <button onDoubleClick={()=>{this.changeName()}}>Change Name</button>
      </div>

    )
  }




}
export default Demo
