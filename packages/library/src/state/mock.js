import { getAppDefaultStateFromData } from './default'

export const mockAppState = getAppDefaultStateFromData({
  isRunningOnLocalHostOverwrite: true,
  isRunningOnGitHubPagesOverwrite: false,
  isRunningOnHeroku: false,
})
