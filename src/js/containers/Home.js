import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { state, props } = this
    return (
      <div>
        <h1>Home</h1>
        <Link to="/not-found">Link to nowhere</Link>
      </div>
    )
  }
}

Home.propTypes = {}

export default Home
