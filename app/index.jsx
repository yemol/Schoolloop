import React from "react"
import { Router, Route, Link } from 'react-router'
import { render } from "react-dom"
import routes from "./routes"

require("./components/index.less")
require("./container/index.less")


render (routes, document.getElementById("TopFrame"))
