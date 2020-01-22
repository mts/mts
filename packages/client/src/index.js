/* eslint global-require: 0 */

import './index.scss'
import { isRunningOnLocalHostViaDomain, isRunningOnGitHubPages } from '../../library/src/environment'
import { getAppDefaultStateFromData } from '../../library/src/state/default'

require('@babel/register')({
  extensions: ['.js', '.jsx'],
  ignore: [],
})

if (typeof window === 'undefined') {
  require('./serverRenderApp')
} else {
  require('whatwg-fetch')

  if (isRunningOnLocalHostViaDomain || isRunningOnGitHubPages) {
    window.appDefaultState = getAppDefaultStateFromData({
      isRunningOnLocalHostViaDomainOverwrite: isRunningOnLocalHostViaDomain,
      isRunningOnGitHubPagesOverwrite: isRunningOnGitHubPages,
      isRunningOnHeroku: false,
    })
  }

  require('./clientRenderApp')
}
