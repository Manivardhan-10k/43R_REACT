import React, { Component } from 'react'

class Child extends Component {
  render() {
    return (
      <div>
        child component
        {this.props.children}

      </div>
    )
  }
}

export default Child