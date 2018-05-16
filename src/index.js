import React from 'react'
import ReactDOM from 'react-dom'

import Routes from 'router'

import 'global.scss'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration)
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError)
      })
  })
}

ReactDOM.render(<Routes />, document.getElementById('root'))
