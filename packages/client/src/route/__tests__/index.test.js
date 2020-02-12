/* eslint-disable import/no-dynamic-require, global-require */
import React from 'react'

const mockRequireHomePage = () => {
  const homePagePath = '../../pattern/page/HomePage'
  jest.mock(homePagePath, () => {
    return <div>HomePage</div>
  })
  return require(homePagePath)
}

const mockRequireAboutPage = () => {
  const aboutPagePath = '../../pattern/page/AboutPage'
  jest.mock(aboutPagePath, () => {
    return <div>AboutPage</div>
  })
  return require(aboutPagePath)
}

const mockRequireBlogPage = () => {
  const blogPagePath = '../../pattern/page/BlogPage'
  jest.mock(blogPagePath, () => {
    return <div>BlogPage</div>
  })
  return require(blogPagePath)
}

const mockRequireNotFoundPage = () => {
  const notFoundPagePath = '../../pattern/page/NotFoundPage'
  jest.mock(notFoundPagePath, () => {
    return <div>NotFoundPage</div>
  })
  return require(notFoundPagePath)
}

const mockRequirePath = () => {
  const pathPath = '../path'
  jest.mock(pathPath, () => {
    return {
      homePagePath: 'some-home-page-path',
      aboutPagePath: 'some-about-page-path',
      blogPagePath: 'some-blog-page-path',
    }
  })
  return require(pathPath)
}

describe('index', () => {
  const path = mockRequirePath()

  const requireIndex = () => {
    return require('../index')
  }

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
