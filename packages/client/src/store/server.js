import { createStore } from 'redux'
import { getAppReducer } from './reducer'
import { getAppDefaultStateFromData } from '../../../library/src/state/default'
import { isRunningOnLocalHostViaPort } from '../../../library/src/environment'

export const serverAppStore = createStore(
  getAppReducer(),
  getAppDefaultStateFromData({
    isRunningOnLocalHost: isRunningOnLocalHostViaPort,
    isRunningOnGitHubPages: false,
    isRunningOnHeroku: true,
  }),
)
