import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './router'

// Include global styles
import './global.scss'

ReactDOM.render(<Routes />, document.getElementById('root'))

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
