import React from "react";
 export class Counter extends React.Component{

  constructor(){
    super()
    this.state={
      count:0 //1 2
    }
  }


  handleInc=()=>{
    this.setState({count:this.state.count+1})
  }
  handleDec=()=>{
     if(this.state.count>0){
    this.setState({count:this.state.count-1})}
   else{
    this.setState({count:0})
   }



  }
  render(){
    return(
      <div>

        <h1>counter value: {this.state.count}</h1>

        <button onClick={()=>this.handleInc()}>increment</button>
        <button onClick={()=>{this.handleDec()}}  style={{display:this.state.count>0?"block":"none"}}>decrement</button>

      </div>
    )
  }

}

// export default Counter