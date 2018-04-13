import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
      </div>
    )
  }
}

Home.propTypes = {}

export default Home
