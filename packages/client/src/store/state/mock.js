import { data as appDefaultState } from '../../../../http-server/src/data'
import { isRunningOnLocalHost, isRunningOnGitHubPages } from '../../bootstrap/app'

const {
  uiData: { homePageData, notFoundPageData },
} = appDefaultState

export const mockAppState = {
  context: {
    isRunningOnLocalHost,
    isRunningOnGitHubPages,
    isRunningOnHeroku: false,
  },
  api: {},
  ui: {
    homePageData,
    notFoundPageData,
  },
}
