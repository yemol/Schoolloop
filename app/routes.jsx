import React from "react"
import { Route, Router, IndexRoute }  from "react-router"
import { App } from "./container"
import { Content, About } from "./components"


module.exports = (
  <Route path="/" component={App}>
    <Route  path="about" component={About} />
    <Route  path="content" component={Content} />
  </Route>
)
