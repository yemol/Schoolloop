import React, { Component, PropTypes } from 'react'

export default class Html extends Component {

  // We have 4 props for this component
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    body: PropTypes.string,
  }
  // have default value for props
  static defaultProps = {
    title: '',
    description: '',
    body: '',
  }

  render () {
    return (
      <html lang="zh">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>{this.props.title}</title>
          <meta name="description" content={this.props.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" type="text/css" href="index.css" />
          <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />
        </head>
        <body>
          <div dangerouslySetInnerHTML={{ __html: this.props.body }} id="TopFrame"></div>
          <script src="/index.js"></script>
        </body>
      </html>
    )
  }
}
