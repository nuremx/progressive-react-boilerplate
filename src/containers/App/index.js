import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './styles.pcss'

class App extends Component {
  static propTypes = {}

  state = {}

  render() {
    return (
      <div className="app">
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus velit
          tenetur impedit maxime aperiam, sed in eum neque quos commodi debitis
          numquam architecto minus ullam doloribus reiciendis ex consequatur
          praesentium.
        </p>
        <Link to="/not-found">Go to lazy-loaded Not Found route</Link>
      </div>
    )
  }
}

App.propTypes = {}

export default App
