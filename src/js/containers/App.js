import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

/*
import { Nav } from '../components'
import { NetworkOperation } from '../lib/NetworkOperation'
*/

class App extends Component {
  componentWillMount() {
    // Verify auth
    // Get user
  }

  render() {
    return (
      <div id="app">
        <Helmet>
          <title>React Boilerplate</title>
        </Helmet>
        {/* <Nav /> */}
        <h1>React Boilerplate</h1>
        <p>React, Redux, Webpack 4, React Hot Reload, Axios, React Router, Express and more...</p>
        <Switch>
          {/* Add routes */}
        </Switch>
      </div>
    )
  }
}

App.propTypes = {
  setCredentials: PropTypes.func,
  history: PropTypes.object,
  user: PropTypes.object,
  credentials: PropTypes.object
}

function mapDispatchToProps(dispatch) {
  return {}
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
