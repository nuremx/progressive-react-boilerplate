import React from 'react'
import ReactDOM from 'react-dom'

import Router from 'router'

import './global.pcss'
/* eslint-disable */
const devMode = process.env.NODE_ENV === 'development'
/* eslint-enable */

// Service worker
if (!devMode && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        registration.onupdatefound = () => {
          const installingWorker = registration.installing
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                console.warn('New content is available; please refresh')
              } else {
                console.info('Content is cached for offline use', registration)
              }
            }
          }
        }
      })
      .catch((registrationError) => {
        console.info('SW registration failed: ', registrationError)
      })
  })
}

// Main render
ReactDOM.render(<Router />, document.getElementById('root'))
