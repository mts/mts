import { getAppDefaultState } from '../../../../library/state'

export const mockAppState = getAppDefaultState({
  isRunningOnLocalHostOverwrite: true,
  isRunningOnGitHubPagesOverwrite: false,
  isRunningOnHeroku: false,
})
