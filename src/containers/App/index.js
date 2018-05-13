import React, { PureComponent } from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

// import Nav from 'components/Nav'
// import NetworkOperation from 'lib/NetworkOperation'
import Home from 'containers/Home'
import LoadableNotFound from 'containers/NotFound/Loadable'

class App extends PureComponent {
  static propTypes = {}

  state = {}

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

function mapDispatchToProps() {
  return {}
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
