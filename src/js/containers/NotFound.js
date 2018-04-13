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
        <h1>Not Found</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          beatae ab, sed assumenda eum nobis magnam aperiam architecto quae
          excepturi quisquam, reiciendis consequuntur, quis accusamus temporibus
          fuga voluptates itaque. Dolore.
        </p>
      </div>
    )
  }
}

NotFound.propTypes = {}

export default NotFound
