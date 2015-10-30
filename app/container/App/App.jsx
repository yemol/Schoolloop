import React, { Component, PropTypes } from 'react'
import { MainNavigation } from "../../components"

export default class App extends Component {

  // We have 4 props for this component
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    css: PropTypes.string,
    current: PropTypes.string,
    children: PropTypes.element,
    error: PropTypes.object,
  }
  // have default value for props
  static defaultProps = {
    title: '',
    description: '',
    current: "yemol"
  }

  render () {
    return (
      <div>
        <MainNavigation name={this.props.current} />
        <div>{this.props.children}</div>
      </div>
    )
  }
}
