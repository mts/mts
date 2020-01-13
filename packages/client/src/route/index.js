import { AsyncHomePage } from '../pattern/page/HomePage'
import { AsyncNotFoundPage } from '../pattern/page/NotFoundPage'
import { homePagePath } from './path'

export const homePageRoute = {
  path: homePagePath,
  exact: true,
  component: AsyncHomePage,
}

export const notFoundPageRoute = {
  component: AsyncNotFoundPage,
}
