import { windowObjectExists, isRunningOnLocalHostViaDomain, isRunningOnGitHubPages } from '../environment'
import { data } from '../../../http-server/src/data'

export function getAppDefaultStateFromWindow() {
  return windowObjectExists ? window.appDefaultState : {}
}

export function getAppDefaultStateFromData({ isRunningOnLocalHostOverwrite, isRunningOnGitHubPagesOverwrite, isRunningOnHeroku }) {
  const {
    uiData: { homePageData, notFoundPageData },
  } = data

  return {
    context: {
      isRunningOnLocalHost: isRunningOnLocalHostOverwrite || isRunningOnLocalHostViaDomain,
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
