/* eslint-disable import/no-dynamic-require, global-require */
import React from 'react'

const mockRequireHomePage = () => {
  const homePagePath = '../pattern/page/HomePage'
  jest.mock(homePagePath, () => {
    return <div>HomePage</div>
  })
  return require(homePagePath).AsyncHomePage
}

const mockRequireNotFoundPage = () => {
  const notFoundPagePath = '../pattern/page/NotFoundPage'
  jest.mock(notFoundPagePath, () => {
    return <div>NotFoundPage</div>
  })
  return require(notFoundPagePath).AsyncNotFoundPage
}

const mockRequirePath = () => {
  const pathPath = './path'
  jest.mock(pathPath, () => {
    return {
      homePagePath: 'some-home-page-path',
    }
  })
  return require(pathPath)
}

describe('index', () => {
  const homePage = mockRequireHomePage()
  const notFoundPage = mockRequireNotFoundPage()
  const path = mockRequirePath()

  const expectedHomePageRoute = {
    path: path.homePagePath,
    exact: true,
    component: homePage,
  }

  const expectedNotFoundPageRoute = {
    component: notFoundPage,
  }

  const requireIndex = () => {
    return require('./index')
  }

  describe('homePageRoute', () => {
    test('must return home page route object', () => {
      const { homePageRoute } = requireIndex()
      expect(homePageRoute).toEqual(expectedHomePageRoute)
    })
  })

  describe('notFoundPageRoute', () => {
    test('must return not found page route object', () => {
      const { notFoundPageRoute } = requireIndex()
      expect(notFoundPageRoute).toEqual(expectedNotFoundPageRoute)
    })
  })
})
/* eslint-enable import/no-dynamic-require, global-require */
