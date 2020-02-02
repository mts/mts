import { AsyncHomePage, HomePage } from '../pattern/page/HomePage'
import { AsyncAboutPage, AboutPage } from '../pattern/page/AboutPage'
import { AsyncBlogPage, BlogPage } from '../pattern/page/BlogPage'
import { AsyncNotFoundPage, NotFoundPage } from '../pattern/page/NotFoundPage'
import { homePagePath, aboutPagePath, blogPagePath } from './path'

export const homePageRoute = {
  path: homePagePath,
  exact: true,
  clientComponent: AsyncHomePage,
  serverComponent: HomePage,
}

export const aboutPageRoute = {
  path: aboutPagePath,
  exact: true,
  clientComponent: AsyncAboutPage,
  serverComponent: AboutPage,
}

export const blogPageRoute = {
  path: blogPagePath,
  exact: true,
  clientComponent: AsyncBlogPage,
  serverComponent: BlogPage,
}

export const notFoundPageRoute = {
  clientComponent: AsyncNotFoundPage,
  serverComponent: NotFoundPage,
}
