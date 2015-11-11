import React, { Component, PropTypes as T } from 'react'

export default class Login extends Component {
  static propTypes = {
    placeholder: T.string.isRequired,
    label: T.string.isRequired,
    inputType: T.string.isRequired,
    id: T.string.isRequired,
    name: T.string,
    update: T.func
  }

  onFocus = (event) => {
    $(event.target.parentElement).addClass("focused")
  }

  onBlur = (event) => {
    $(event.target.parentElement).removeClass("focused")
  }

  onChange = (event) => {
    // console.log ("value changed to:" + event.target.value )
    this.props.update (event.target.value)
  }

  render () {
    return (
      <div className="input-row">
        <i className={this.props.label} />
        <input type={this.props.inputType} placeholder={this.props.placeholder} onFocus={this.onFocus} onBlur={this.onBlur} onChange={this.onChange} />
      </div>)
  }
}
