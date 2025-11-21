import React, { Component } from 'react'
import Child from './Child'
export class App extends Component {

  state={
    count:1,
    name:"Nithya"
  }
  render() {
    return (
      <div>
        parent component

       {/* <Child   data={value}/> */}     

       <Child>
        <h1>this is a children prop heading</h1>
       </Child>
      </div>
    )
  }
}

export default App