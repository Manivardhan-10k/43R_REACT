// text changes color based on button 

import React from "react";
class Color extends React.Component{
    constructor(){
        super()
    this.state={
        color:"",
        size:""
    }
    }
    changeBlue=()=>{
        this.setState({color:"blue",size:"75px"})
    }
    changeGreen=()=>{
        this.setState({color:"green",size:"50px"})
    }
    render(){
        return(
            <div>
            <h1 style={{color:this.state.color,fontSize:this.state.size}}>change the color</h1>
            <button onClick={()=>{this.changeBlue()}}>Blue</button>
            <button onClick={()=>{this.changeGreen()}}>Green</button>
            </div>
        )
    }


}

export default Color