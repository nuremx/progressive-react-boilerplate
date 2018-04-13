import React from 'react'
import Loadable from 'react-loadable'

import Loading from './Loading'

const LoadableComponent = Loadable({
  loader: () => import('./NotFound'),
  loading: Loading
})

export default () => <LoadableComponent />
