/* eslint-disable import/no-dynamic-require, global-require */
const mockRequireHomePage = () => {
  const homePagePath = '../../pattern/page/HomePage'
  jest.mock(homePagePath, () => 'HomePage')
  return require(homePagePath)
}

const mockRequireAboutPage = () => {
  const aboutPagePath = '../../pattern/page/AboutPage'
  jest.mock(aboutPagePath, () => 'AboutPage')
  return require(aboutPagePath)
}

const mockRequireBlogPage = () => {
  const blogPagePath = '../../pattern/page/BlogPage'
  jest.mock(blogPagePath, () => 'BlogPage')
  return require(blogPagePath)
}

const mockRequireCoursesPage = () => {
  const coursesPagePath = '../../pattern/page/CoursesPage'
  jest.mock(coursesPagePath, () => 'CoursesPage')
  return require(coursesPagePath)
}

const mockRequireNotFoundPage = () => {
  const notFoundPagePath = '../../pattern/page/NotFoundPage'
  jest.mock(notFoundPagePath, () => 'NotFoundPage')
  return require(notFoundPagePath)
}

const mockRequirePath = () => {
  const pathPath = '../path'
  jest.mock(pathPath, () => ({
    homePagePath: 'some-home-page-path',
    aboutPagePath: 'some-about-page-path',
    blogPagePath: 'some-blog-page-path',
    coursesPagePath: 'some-courses-page-path',
  }))
  return require(pathPath)
}

describe('index', () => {
  const path = mockRequirePath()

  const requireIndex = () => require('../index')

  describe('homePageRoute', () => {
    const homePage = mockRequireHomePage()

    const expectedHomePageRoute = {
      path: path.homePagePath,
      exact: true,
      clientComponent: homePage.AsyncHomePage,
      serverComponent: homePage.HomePage,
    }

    test('must return home page route object', () => {
      const { homePageRoute } = requireIndex()
      expect(homePageRoute).toEqual(expectedHomePageRoute)
    })
  })

  describe('aboutPageRoute', () => {
    const aboutPage = mockRequireAboutPage()

    const expectedAboutPageRoute = {
      path: path.aboutPagePath,
      exact: true,
      clientComponent: aboutPage.AsyncAboutPage,
      serverComponent: aboutPage.AboutPage,
    }

    test('must return about page route object', () => {
      const { aboutPageRoute } = requireIndex()
      expect(aboutPageRoute).toEqual(expectedAboutPageRoute)
    })
  })

  describe('blogPageRoute', () => {
    const blogPage = mockRequireBlogPage()

    const expectedBlogPageRoute = {
      path: path.blogPagePath,
      exact: true,
      clientComponent: blogPage.AsyncBlogPage,
      serverComponent: blogPage.BlogPage,
    }

    test('must return blog page route object', () => {
      const { blogPageRoute } = requireIndex()
      expect(blogPageRoute).toEqual(expectedBlogPageRoute)
    })
  })

  describe('coursesPageRoute', () => {
    const coursesPage = mockRequireCoursesPage()

    const expectedCoursesPageRoute = {
      path: path.coursesPagePath,
      exact: true,
      clientComponent: coursesPage.AsyncCoursesPage,
      serverComponent: coursesPage.CoursesPage,
    }

    test('must return courses page route object', () => {
      const { coursesPageRoute } = requireIndex()
      expect(coursesPageRoute).toEqual(expectedCoursesPageRoute)
    })
  })

  describe('notFoundPageRoute', () => {
    const notFoundPage = mockRequireNotFoundPage()

    const expectedNotFoundPageRoute = {
      clientComponent: notFoundPage.AsyncNotFoundPage,
      serverComponent: notFoundPage.NotFoundPage,
    }

    test('must return not found page route object', () => {
      const { notFoundPageRoute } = requireIndex()
      expect(notFoundPageRoute).toEqual(expectedNotFoundPageRoute)
    })
  })
})
/* eslint-enable import/no-dynamic-require, global-require */
