import React, { Component, PropTypes as T } from 'react'


export default class NotFoundPage extends Component {
  static propTypes = {
    fileName: T.string.isRequired
  }

  render () {
    return (
      <html lang="zh">
        <head>
          <title>School Loop 云学校平台</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta httpEquiv="Content-Language" content="zh" />
        </head>
        <body>
          {fileName} is not found.
        </body>
      </html>
    )
  }
}
