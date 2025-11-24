// import React, { Component } from 'react'

// class App extends Component {
//   constructor(){
//     super()
//     console.log("i will be executed from constructor");

//     this.state={
//       library:"react",
//       pro_data:null
//     }
    
//   }

//   componentDidMount=async ()=>{
//     // setTimeout(()=>{
//     //   this.setState({library:"react js"})

//     // },5000)
//     // console.log("from the update");

//     await fetch("https://fakestoreapi.com/products/").then(res=>res.json()).then(data=>this.setState({pro_data:data})).catch(err=>console.error(err))

    
//   }



//   render() {
//     console.log("from the render");
    
//     return (
//       <div>

//        {this.state.pro_data?

//        this.state.pro_data.map((ele,ind)=>{
//         return <p key={ind}>{ele.title}</p>

//        })
       
       
       
       
//        :<h1>NO products available</h1>}

      
//       </div>
//     )
//   }
// }

// export default App










// import { Component } from "react";

// class UpdateExample extends Component {
//   constructor() {
//     super();
//     this.state = { count: 0 };
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log("componentDidUpdate: Component updated!");
//     console.log("Previous count:", prevState.count);
//     console.log("Current count:", this.state.count);
//   }

//   increment = () => {
//     this.setState({ count: this.state.count});
//   };

//   render() {
//     console.log("Render: Updating UI");
//     return (
//       <div>
//         <h2>Count: {this.state.count}</h2>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     );
//   }
// }


// export default UpdateExample




import { Component } from "react";
import Sample from "./Sample";
import Sample2 from "./Sample2";

class UnmountExample extends Component {
      state={
        change:false
    }

    componentDidMount=()=>{
      setTimeout(()=>{
        this.setState({change:true})
      },10000)
    }
  render() {
    return (
    <div>

      {this.state.change?<Sample2/> :<Sample/>}
    </div>
    )
  }
}



export default UnmountExample