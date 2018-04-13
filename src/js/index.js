import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './router'

// Styles
import '../styles/master.scss'

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
)

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//       navigator.serviceWorker.register('/dist/sw.js').then(registration => {
//         console.log('SW registered: ', registration)
//         console.log(registration.scope)
//       })
//       .catch(registrationError => {
//         console.log('SW registration failed: ', registrationError)
//       })
//     })
//   }
