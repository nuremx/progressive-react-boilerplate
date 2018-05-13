/**
 *
 * Home
 *
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

class Home extends Component {
  static propTypes = {}

  state = {}

  render() {
    const { state, props } = this
    return (
      <div>
        <h1>Boilerplate home</h1>
        <Link to="/nowhere">Link to nowhere (splitted)</Link>
      </div>
    )
  }
}

export default Home
