import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import './style.pcss'

class NotFound extends Component {
  static propTypes = {}

  state = {}

  render() {
    const { state, props } = this

    return (
      <div className="not-found">
        <h1 className="not-found__header">Not found</h1>
        <p>This is a dynamic imported component.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat qui
          distinctio molestias aliquid asperiores quibusdam, voluptatibus omnis
          laboriosam aperiam, possimus, fugiat consequuntur illo ad ipsum,
          architecto deserunt labore perspiciatis praesentium.
        </p>
        <Link to="/">Back home</Link>
      </div>
    )
  }
}

export default NotFound
