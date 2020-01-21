import { data } from '../../http-server/src/data'
import { isRunningOnLocalHost, isRunningOnGitHubPages } from './environment'

export function getAppDefaultState({ isRunningOnLocalHostOverwrite, isRunningOnGitHubPagesOverwrite, isRunningOnHeroku }) {
  const {
    uiData: { homePageData, notFoundPageData },
  } = data

  return {
    context: {
      isRunningOnLocalHost: isRunningOnLocalHostOverwrite || isRunningOnLocalHost,
      isRunningOnGitHubPages: isRunningOnGitHubPagesOverwrite || isRunningOnGitHubPages,
      isRunningOnHeroku,
    },
    api: {},
    ui: {
      homePageData,
      notFoundPageData,
    },
  }
}
