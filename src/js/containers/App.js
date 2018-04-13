import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

/*
import { Nav } from '../components'
import { NetworkOperation } from '../lib/NetworkOperation'
*/
import { Home, AsyncNotFound } from './'

class App extends Component {
  render() {
    return (
      <div id="app">
        <Helmet>
          <title>React Boilerplate</title>
        </Helmet>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={AsyncNotFound} />
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

function mapDispatchToProps() {
  return {}
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
