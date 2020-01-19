/* eslint global-require: 0 */

import './index.scss'
import { data as appDefaultState } from '../../http-server/src/data'
import { isRunningOnLocalHost, isRunningOnGitHubPages, isRunningOnHeroku } from './bootstrap/app'

require('@babel/register')({
  extensions: ['.js', '.jsx'],
  ignore: [],
})

if (typeof window === 'undefined') {
  require('./serverApp')
} else {
  const {
    uiData: { homePageData, notFoundPageData },
  } = appDefaultState

  if (isRunningOnLocalHost) {
    window.appDefaultState = {
      context: {
        isRunningOnLocalHost,
        isRunningOnGitHubPages,
        isRunningOnHeroku,
      },
      api: {},
      ui: {
        homePageData,
        notFoundPageData,
      },
    }
  }

  require('./clientApp')
}
