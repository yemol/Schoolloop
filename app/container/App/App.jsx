import React, { Component, PropTypes as T }  from 'react'
import { render } from 'react-dom'
import { MainNavigation } from "../../components"

export default class App extends Component  {
  render () {
    return (
      <div>
        <MainNavigation />
        {this.props.children}
      </div>
    )
  }
}
