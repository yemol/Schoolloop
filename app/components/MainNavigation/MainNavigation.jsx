import React, { Component, PropTypes as T } from 'react'


export default class MainNavigation extends Component {

  static defaultProps = {
    current: "yemol"
  }

  static propTypes = {
    current: T.string.isRequired
  }

  render () {
    return <nav></nav>
  }
}
