import React, { Component, PropTypes as T } from "react"
import { Link } from "react-router"
import { TextField, FlatButton, Paper } from "material-ui"


export default class UserBox extends Component {
  render () {
    return (
    <div className="UserArea">
      <ul >
        <li >
          <Link to="/login" ><i className="fa fa-user fa-lg"></i>登录</Link>
        </li>
        <li >
          <Link to="/login" ><i className="fa fa-edit fa-lg"></i>注册</Link>
        </li>
      </ul>
    </div>)
  }
}
