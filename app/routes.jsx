import React from "react"
import { Route, Router, IndexRoute }  from "react-router"
import { App } from "./container"
import { Content, About } from "./components"

const getRoute = function () {
  console.log ("enter routing")
  return (
    <Route path="/" component={App} test="123">
      <Route  path="aboutus" component={About} test="123" />
      <Route  path="content" component={Content} test="123" />
      <Route  path="login" component={Content} test="123" />
    </Route>
  )
}

module.exports = getRoute()
