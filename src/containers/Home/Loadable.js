import Loadable from 'react-loadable'

export default Loadable({
  loader: () => import('./index' /* webpackChunkName: "home" */),
  loading: () => null,
})
