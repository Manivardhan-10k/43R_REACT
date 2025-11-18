import React  from "react";
import Child from "./Child"

class Parent extends React.Component{
    constructor(){
        super()
        this.state={
            user:"default",
            count:0
        }
    }
    changeName=()=>{
        this.setState({user:"manivardhan"})
    }

    render(){
        return(

            <div>
              <h1>{this.state.user}</h1>  

              <button onClick={()=>this.changeName()}>change</button>


              <Child  data={{user:this.state.user,count:this.state.count}}/>
            </div>
        )
    }

    


}
export default Parent