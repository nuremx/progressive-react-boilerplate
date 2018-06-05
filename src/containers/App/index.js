import React, { PureComponent } from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Home from 'containers/Home'
import NotFound from 'containers/NotFound'

class App extends PureComponent {
  static propTypes = {}

  state = {}

  render() {
    return (
      <div id="app">
        <Helmet>
          <title>React Boilerplate</title>
        </Helmet>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App
