import path from "path"
import express from "express"
import React from "react"
import ReactDOM from "react-dom/server"
import { match, RoutingContext } from 'react-router'
import compression from "compression"
import serveStatic from "serve-static"

import config from "./config.json"
import routes from "./routers"
import { ErrorPage, NotFoundPage } from "./app/container"

// Define a global app can be access every where
const server = global.server = express ()
const port = config.port || 5000
server.set("port", port)

// compress all out content
server.use(compression())
// define static file response
server.use(serveStatic(path.join(__dirname, 'build')))

server.use(async (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      console.log ("======500==========")
      res.status(500).send(ReactDOM.renderToString( <ErrorPage /> ))
    } else if (redirectLocation) {
      console.log ("======302==========")
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      console.log ("======200==========")
      res.status(200).send(ReactDOM.renderToString( <RoutingContext {...renderProps} /> ))
    } else {
      console.log ("======400==========")
      res.status(404).send(ReactDOM.renderToString( <NotFoundPage /> ))
    }
  })
})


/* istanbul ignore next */
server.listen(port, () => {
  console.log('Listening on port %d', port)
})
