import { data as appDefaultState } from '../../../../http-server/src/data'

const {
  uiData: { homePageData, notFoundPageData },
} = appDefaultState

export const mockAppState = {
  context: {
    isRunningOnLocalHost: true,
    isRunningOnGitHubPages: false,
    isRunningOnHeroku: false,
  },
  api: {},
  ui: {
    homePageData,
    notFoundPageData,
  },
}
