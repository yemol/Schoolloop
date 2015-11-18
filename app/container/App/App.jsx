import React, { Component, PropTypes as T }  from 'react'
import { render } from 'react-dom'
import { MainNavigation, UserBox } from "../../components"

export default class App extends Component  {

  render () {
    return (
      <div>
        <MainNavigation {...this.props} />
        <div className="mainArea">{this.props.children}</div>
        <UserBox />
      </div>
    )
  }
}
