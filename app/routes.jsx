import React from "react"
import { Route, Router, IndexRoute }  from "react-router"
import { App, Login } from "./container"
import { Content, About } from "./components"


module.exports = function () {
  console.log ("! enter routing")
  
  return (
    <Route path="/" component={App} >
      <IndexRoute  component={Content}  />
      <Route  path="aboutus" component={About}  />
      <Route  path="content" component={Content} />
      <Route  path="login" component={Login} />
      <Route  path="user" component={Login} />
    </Route>
  )
}
