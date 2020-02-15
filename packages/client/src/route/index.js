import { AsyncHomePage, HomePage } from '../pattern/page/HomePage'
import { AsyncAboutPage, AboutPage } from '../pattern/page/AboutPage'
import { AsyncBlogPage, BlogPage } from '../pattern/page/BlogPage'
import { AsyncCoursesPage, CoursesPage } from '../pattern/page/CoursesPage'
import { AsyncNotFoundPage, NotFoundPage } from '../pattern/page/NotFoundPage'
import { homePagePath, aboutPagePath, blogPagePath, coursesPagePath } from './path'

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

export const coursesPageRoute = {
  path: coursesPagePath,
  exact: true,
  clientComponent: AsyncCoursesPage,
  serverComponent: CoursesPage,
}

export const notFoundPageRoute = {
  clientComponent: AsyncNotFoundPage,
  serverComponent: NotFoundPage,
}
