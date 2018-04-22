import React, { PureComponent } from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

// import { Nav } from '../components'
// import { NetworkOperation } from '../lib/NetworkOperation'
import Home from './Home'
import LoadableNotFound from './NotFound/Loadable'

class App extends PureComponent {
  render() {
    return (
      <div id="app">
        <Helmet>
          <title>React Boilerplate</title>
        </Helmet>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={LoadableNotFound} />
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
