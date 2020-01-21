import { getAppDefaultState } from '../../../../library/src/state'

export const mockAppState = getAppDefaultState({
  isRunningOnLocalHostOverwrite: true,
  isRunningOnGitHubPagesOverwrite: false,
  isRunningOnHeroku: false,
})
