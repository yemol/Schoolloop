var http = require('http');
var express = require('express');
var app = express();
app.use(require('morgan')('short'));

(function() {

  console.log("process.env.NODE_ENV = " + process.env.NODE_ENV)

  // Step 1: Create & configure a webpack compiler
  var webpack = require('webpack');
  var webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : './webpack.config.dev');
  var compiler = webpack(webpackConfig);

  // Step 2: Attach the dev middleware to the compiler & the server
  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
  }));

  // Step 3: Attach the hot middleware to the compiler & the server
  app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log, path: webpackConfig.output.publicPath, heartbeat: 5 * 1000
  }));
})();

// Do anything you like with the rest of your express application.

app.all("/css/*", (req, res) => {
  res.sendFile(__dirname + "/build" + req.path )
})
app.all("/fonts/*", (req, res) => {
  res.sendFile(__dirname + "/build" + req.path )
})
app.all("/images/*", (req, res) => {
  res.sendFile(__dirname + "/build" + req.path )
})

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});



if (require.main === module) {
  var server = http.createServer(app);
  server.listen(process.env.PORT || 8000, function() {
    console.log("Listening on %j", server.address());
  });
}
