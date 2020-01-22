import {
  windowObjectExists,
  isRunningOnLocalHostViaDomain as isRunningOnLocalHostViaDomainDefault,
  isRunningOnGitHubPages as isRunningOnGitHubPagesDefault,
} from '../environment'
import { data } from '../../../http-server/src/data'

export function getAppDefaultStateFromWindow() {
  return windowObjectExists ? window.appDefaultState : {}
}

export function getAppDefaultStateFromData({ isRunningOnLocalHost, isRunningOnGitHubPages, isRunningOnHeroku }) {
  const {
    uiData: { homePageData, notFoundPageData },
  } = data

  return {
    context: {
      isRunningOnLocalHost: isRunningOnLocalHost || isRunningOnLocalHostViaDomainDefault,
      isRunningOnGitHubPages: isRunningOnGitHubPages || isRunningOnGitHubPagesDefault,
      isRunningOnHeroku,
    },
    api: {},
    ui: {
      homePageData,
      notFoundPageData,
    },
  }
}
