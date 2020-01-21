/* eslint global-require: 0 */

import './index.scss'
import { isRunningOnLocalHost, isRunningOnGitHubPages } from '../../library/src/environment'
import { getAppDefaultState } from '../../library/src/state'

require('@babel/register')({
  extensions: ['.js', '.jsx'],
  ignore: [],
})

if (typeof window === 'undefined') {
  require('./serverRenderApp')
} else {
  if (isRunningOnLocalHost || isRunningOnGitHubPages) {
    window.appDefaultState = getAppDefaultState({
      isRunningOnLocalHostOverwrite: isRunningOnLocalHost,
      isRunningOnGitHubPagesOverwrite: isRunningOnGitHubPages,
      isRunningOnHeroku: false,
    })
  }

  require('./clientRenderApp')
}
