import React, { Component, PropTypes as T } from 'react'


export default class MainNavigation extends Component {

  static defaultProps = {
    name: "yemol"
  }

  static propTypes = {
    name: T.string.isRequired
  }

  render = () => {
    return <nav>{this.props.name}</nav>
  }
}
