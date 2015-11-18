import React, { Component, PropTypes as T } from 'react'
import { Link } from 'react-router'
import { Router }  from "react-router"

export default class MainNavigation extends Component {


  render () {
    const current = this.props.location.pathname
    return (
      <nav className="main" >
        <ul className="navList top">
          <li className={current === "/" ? "current" : ""}><Link to="/" className="fa fa-home fa-lg" activeClassName="current" title="首页" ><span>首页</span></Link></li>
          <li className={current === "/modules" ? "current" : ""}><Link to="/modules" className="fa fa-th-large fa-lg" title="模块列表" ><span>模块列表</span></Link></li>
          <li className={current === "/user" ? "current" : ""}><Link to="/user" className="fa fa-user fa-lg" title="个人中心" ><span>个人中心</span></Link></li>
        </ul>
        <ul className="navList bottom">
          <li className={current === "/aboutus" ? "current" : ""}><Link to="/aboutus" className="fa fa-envelope fa-2x" title="联系我们" ><span>联系我们</span></Link></li>
          <li className={current === "/request" ? "current" : ""}><Link to="/request" className="fa fa-plug fa-2x" title="申请新模块" ><span>模块申请</span></Link></li>
        </ul>
      </nav>)
  }
}
