import { data as appDefaultState } from '../../../../http-server/src/data'
import { isRunningOnLocalHost, isRunningOnGitHubPages, isRunningOnHeroku } from '../../bootstrap/app'

const {
  uiData: { homePageData, notFoundPageData },
} = appDefaultState

export const mockAppState = {
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
