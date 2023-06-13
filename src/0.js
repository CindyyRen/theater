import React, { Component } from 'react'

export default class Prop extends Component {
  static defaultProps={
    leftShow:true
  }
  render() {
    return (
      <div>Prop</div>
    )
  }
}


Prop.defaultProps={
  leftShow:true
}
// Prop.propsTypes={
//   title:pt.string,
//   leftShow:pt.bool
// }