import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import './style.pcss'

class Home extends Component {
  static propTypes = {}

  state = {}

  render() {
    const { state, props } = this

    return (
      <div className="home">
        <h1 className="home__header">Boilerplate home</h1>
        <Link to="/nowhere">Link to nowhere (splitted)</Link>
      </div>
    )
  }
}

export default Home
