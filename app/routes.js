import React from "react"
import { DefaultRoute, NotFoundRoute, Route, Router }  from "react-router"
import { App } from "./container"

module.exports = (
  <Router>
    <Route path="/" component={App} />
  </Router>
)
