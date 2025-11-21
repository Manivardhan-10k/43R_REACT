// import React, { Component } from 'react'

// export class App extends Component {


//   state={
//     loggedin:true
//   }

//   handleState=()=>{
//     this.setState({loggedin: !this.state.loggedin })
//   }

//   render() {
//     return (
//       <div>

//         {this.state.loggedin?<button onClick={()=>this.handleState()}>LOGOUT</button>:<button onClick={()=>this.handleState()}>LOGIN</button> }

//       </div>
//     )
//   }
// }

// export default App





// import React, { Component } from 'react'
// import Premium from './Premium'
// import Free from './Free'

// class App extends Component {

//   state={
//     subcriber:true
//   }
//   render() {
//     return (
//       <div>

//         {this.state.subcriber? <Premium /> :<Free /> }


//       </div>
//     )
//   }
// }

// export default App




// import React, { Component } from 'react'

// export class App extends Component {


//   state={
//     students:["rambabu","chandra","pavani","meghana","rishitha","poojitha","prasanna","aravind","gopi krishna"]
//   }
//   render() {
//     return (
//       <div>

//         {this.state.students.map((ele,ind)=>{
//            return <li key={ind}>{ele}</li>
//         })}
//       </div>
//     )
//   }
// }

// export default App



import React, { Component } from 'react'

class App extends Component {

constructor(){
super()
this.state={name:null}
console.log("from constructor")
  }

componentDidMount(){
    
setTimeout(()=> {
    this.setState({name:"manivardhan"})
    
  },10000)
  console.log("from component did mount")

  }



  render() {

    console.log("from render")
    return (
      <div>
        APP
        {this.state.name}
      </div>
    )
  }
}

export default App