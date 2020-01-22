import { data } from '../../../http-server/src/data'

export const mockAppState = {
  context: {
    isRunningOnLocalHost: true,
    isRunningOnGitHubPages: false,
    isRunningOnHeroku: false,
  },
  api: {
    rest: {
      github: {},
    },
  },
  ui: {
    homePageData: data.uiData.homePageData,
    notFoundPageData: data.uiData.notFoundPageData,
  },
}
