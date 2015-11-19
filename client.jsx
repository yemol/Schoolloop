import React, { PropTypes, Component } from 'react'
import routes from "./app/routes.jsx"
import { render } from "react-dom"
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Route, Router, IndexRoute }  from "react-router"
// import { App, Login } from "./app/container"
import { Content, About } from "./app/components"
import { App } from "./test.jsx"

require("./app/components/index.less")
require("./app/container/index.less")

const myroute =
  <Router >
    <Route path="/" component={App} />
  </Router>

render (new App().render(), document.getElementById("TopFrame"))


if (module.hot) {
  module.hot.accept();
  module.hot.dispose(function() {
  });
}
