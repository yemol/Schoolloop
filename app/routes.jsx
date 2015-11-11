import React from "react"
import { Route, Router, IndexRoute }  from "react-router"
import { App, Login } from "./container"
import { Content, About } from "./components"


const getRoute = function () {
  console.log ("enter routing")
  return (
    <Route path="/" component={App} >
      <IndexRoute  component={About}  />
      <Route  path="aboutus" component={About}  />
      <Route  path="content" component={Content} />
      <Route  path="login" component={Login} />
    </Route>
  )
}

module.exports = getRoute()
