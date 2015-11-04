import React, { Component, PropTypes as T } from 'react'
import { Link } from 'react-router'
import { Router }  from "react-router"

export default class MainNavigation extends Component {


  render () {
    const current = this.props.location.pathname
    return (
      <nav >
        <ul className="navList top">
          <li className={current === "/" ? "current" : ""}><Link to="/" className="fa fa-home fa-2x" activeClassName="current" title="首页" /></li>
          <li className={current === "/modules" ? "current" : ""}><Link to="/modules" className="fa fa-th-large fa-2x" title="模块列表" /></li>
          <li className={current === "/user" ? "current" : ""}><Link to="/user" className="fa fa-user fa-2x" title="个人中心" /></li>
        </ul>
        <ul className="navList bottom">
          <li className={current === "/aboutus" ? "current" : ""}><Link to="/aboutus" className="fa fa-envelope fa-2x" title="联系我们" /></li>
          <li className={current === "/request" ? "current" : ""}><Link to="/request" className="fa fa-plug fa-2x" title="请求新模块" /></li>
        </ul>
      </nav>)
  }
}
