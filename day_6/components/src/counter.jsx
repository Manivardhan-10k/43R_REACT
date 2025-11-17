//count  button click increment 

//0 
import React from "react";
class Counter extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }

    increaseCount=()=>{
        this.setState({count:this.state.count+1})

    }
    decreaseCount=()=>{
        this.setState({count:this.state.count-1})
    }


    render(){
        return (
            <div>
                <h1>Current counter:  {this.state.count}</h1>
                <button onClick={()=>this.increaseCount()}>INCREASE</button>
                <button onClick={()=>this.decreaseCount()}>DECREASE</button>
            </div>
        )
    }


}
export default Counter