import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NotFound extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { state, props } = this
    return (
      <div>
        <h1>Not found</h1>
      </div>
    )
  }
}

NotFound.propTypes = {}

export default NotFound
