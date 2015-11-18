import React, { Component, PropTypes as T } from 'react'


export default class Content extends Component {

  static defaultProps = {
    data: "yemol"
  }

  static propTypes = {
    data: T.string.isRequired
  }

  render () {
    console.log ("Content render")
    return <div className="content">This is content part. And data is {this.props.data}</div>
  }
}
