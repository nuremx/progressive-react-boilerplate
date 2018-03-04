import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './router'

// Styles
import '../styles/master.scss'

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
)

// Progressive Web App service worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/dist/sw.js')
    .then(registration => {
      console.info('SW registered: ', registration)
    })
    .catch(registrationError => {
      console.info('SW registration failed: ', registrationError)
    })
  })
}
