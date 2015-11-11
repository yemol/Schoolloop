import React, { Component, PropTypes as T } from 'react'

export default class Login extends Component {
  static propTypes = {
    id: T.string.isRequired,
    name: T.string.isRequired,
    value: T.string.isRequired,
    onClick: T.func,
  }

  render () {
    return (<input id={this.props.id} name={this.props.name} className="button-submit" type="button" value={this.props.value} onClick={this.props.onClick} />)
  }
}
