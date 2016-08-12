import React, { PropTypes, Component } from 'react'

// import { Link } from 'react-router'
// import { prefixLink } from 'gatsby-helpers'
// import { config } from 'config'

// import theme
import 'muicss/lib/css/mui.css'
import '../css/main.scss'

export default class MainTemplate extends Component {
  render () {
    return (
      <div id="app">
        {this.props.children}
      </div>
    )
  }
}

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}
