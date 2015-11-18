import React, { PropTypes, Component } from 'react'
import routes from "./routes.jsx"
import { render } from "react-dom"
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router }  from "react-router"

require("./components/index.less")
require("./container/index.less")


const rootInstance = render (<Router history={createBrowserHistory()} routes={routes} />, document.getElementById("TopFrame"))

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(function() {
    clearInterval(timer);
  });
}
