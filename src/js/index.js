import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Routes from './router'

// Styles
import '../styles/master.scss'

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Routes)

if (module.hot) {
  module.hot.accept('./router', () => {
    render(Routes)
  })
}
