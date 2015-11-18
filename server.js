import path from "path"
import express from "express"
import React from "react"
import ReactDOM from "react-dom/server"
import { match, RoutingContext } from 'react-router'
import compression from "compression"
import serveStatic from "serve-static"
import favicon from "serve-favicon"
import config from "./config.json"
import routes from "./app/routes"
import { ErrorPage, NotFoundPage } from "./app/container"
import Html from "./src/Html"

// Define a global app can be access every where
const server = global.server = express ()
const port = config.port || 5000

// compress all out content
server.use(compression())
// define static file response
server.use(serveStatic(path.join(__dirname, 'build')))
// define the favicon
server.use(favicon(path.join(__dirname, 'build/images/sublime-text.ico')))


server.use(async (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      console.log ("======500==========")
      res.status(500).send(ReactDOM.renderToString( <ErrorPage body={body} /> ))
    } else if (redirectLocation) {
      console.log ("======302==========")
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      console.log ("======200==========")
      const body = ReactDOM.renderToString(<RoutingContext {...renderProps} />)
      const html = ReactDOM.renderToStaticMarkup(<Html body={body} />)
      res.status(200).send('<!doctype html>\n' + html )
    } else {
      console.log ("======400==========")
      console.log (error)
      res.status(404).send(ReactDOM.renderToString( <NotFoundPage fileName={error} /> ))
    }
  })
})


/* istanbul ignore next */
server.listen(port, () => {
  console.log('Listening on port %d', port)
})
