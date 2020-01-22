import { getAppDefaultStateFromData } from './default'

export const mockAppState = getAppDefaultStateFromData({
  isRunningOnLocalHost: true,
  isRunningOnGitHubPages: false,
  isRunningOnHeroku: false,
})
