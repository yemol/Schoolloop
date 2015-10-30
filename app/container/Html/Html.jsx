import React, { Component, PropTypes } from 'react'
import { MainNavigation } from "../../components"

export default class Html extends Component {

  // We have 4 props for this component
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    css: PropTypes.string,
    body: PropTypes.string,
  }
  // have default value for props
  static defaultProps = {
    title: '',
    description: '',
    body: "123"
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
        <style id="css" dangerouslySetInnerHTML={{ __html: this.props.css }} />
        <link rel="stylesheet" type="text/css" href="index.css" />
      </head>
      <body >
        <MainNavigation name={this.props.body} />
      </body>
      </html>
    )
  }
}
