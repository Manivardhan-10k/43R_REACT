// import React, { Component } from 'react'
// import Child from "./Child"


// export class App extends Component {
//   render() {
//     return (
//       <div>
        
//         hello from app
//         {/* <Child  data={{user:"someone"}}/> */}

//         <Child>
//           <div>this is a child prop</div>

//         </Child>


//       </div>

//     )
//   }
// }

// export default App

//parent

//general props   
//   <Child data={} />


//children props
//  <Child  >   data  <Child />




// instagram.com/reels


import React, { Component } from 'react'

import Child from './Child'
import Login from './Login'
import "./App.css"

export class App extends Component {

  state={
    loggedin:false
  }
  handleMessage=()=>{
    this.setState({loggedin:true})

  }
  render() {
    return (
      <div>

        {/* {this.state.loggedin? <p>this is a secret message</p>:<p>pls login first</p>} */}

        {/* {this.state.loggedin?<Child /> :<Login />} */}

         {/* <p>before condition</p>
        {this.state.loggedin&& <p>this is a messsage</p>}
        <p>after condition</p> */}


        {/* <h1 style={{color:this.state.loggedin&&"green"}}>REACT</h1> */}


        <h1 className={this.state.loggedin?"online":"offline"}>this is a react class</h1>
        <button onClick={()=>{this.handleMessage()}}>show message</button>

         


      </div>
    )
  }
}

export default App



// ternary 
// if else 
// && --> only true