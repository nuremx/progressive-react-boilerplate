/**
 *
 * Asynchronously loads the component for Landing
 *
 */

import Loadable from 'react-loadable'

export default Loadable({
  loader: () => import('./index'),
  loading: () => null
})
