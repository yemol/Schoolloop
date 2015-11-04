import React, { Component, PropTypes as T } from 'react'
import { Link } from 'react-router'


export default class UserBox extends Component {
  render () {
    return (
      <div className="UserArea">
        <ul >
          <li ><Link to="/signup" title="注册" ><i className="fa fa-user fa-1x" />注册</Link></li>
          <li ><Link to="/login" title="登陆" ><i className="fa fa-hand-pointer-o fa-1x" />登陆</Link></li>
        </ul>
      </div>)
  }
}
