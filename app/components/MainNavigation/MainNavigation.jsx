import React, { Component, PropTypes as T } from 'react'
import { Link } from 'react-router'

export default class MainNavigation extends Component {
  render () {
    console.log ("MainNavigation render")
    return (
      <nav>
        <div>navigation</div>
        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/content">Content page</Link></li>
          <li><Link to="/">Back Home</Link></li>
        </ul>
      </nav>)
  }
}
