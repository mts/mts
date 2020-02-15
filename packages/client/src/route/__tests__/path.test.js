/* eslint-disable global-require */
describe('path', () => {
  const someBaseUrl = 'some-base-url'

  const extendEnvironmentVariables = () => {
    process.env.BASE_URL = someBaseUrl
  }

  const restoreEnvironmentVariables = () => {
    delete process.env.BASE_URL
  }

  const requirePath = () => {
    return require('../path')
  }

  afterEach(() => {
    restoreEnvironmentVariables()
  })

  describe('homePagePath', () => {
    test('must return path with base url when process.env.BASE_URL is present', () => {
      jest.resetModules()
      extendEnvironmentVariables()
      const { homePagePath } = requirePath()
      expect(homePagePath).toBe(`${process.env.BASE_URL}/`)
    })

    test('must return path without base url when process.env.BASE_URL is absent', () => {
      jest.resetModules()
      const { homePagePath } = requirePath()
      expect(homePagePath).toBe('/')
    })
  })

  describe('aboutPagePath', () => {
    test('must return path with base url when process.env.BASE_URL is present', () => {
      jest.resetModules()
      extendEnvironmentVariables()
      const { aboutPagePath } = requirePath()
      expect(aboutPagePath).toBe(`${process.env.BASE_URL}/about`)
    })

    test('must return path without base url when process.env.BASE_URL is absent', () => {
      jest.resetModules()
      const { aboutPagePath } = requirePath()
      expect(aboutPagePath).toBe('/about')
    })
  })

  describe(' blogPagePath', () => {
    test('must return path with base url when process.env.BASE_URL is present', () => {
      jest.resetModules()
      extendEnvironmentVariables()
      const { blogPagePath } = requirePath()
      expect(blogPagePath).toBe(`${process.env.BASE_URL}/blog`)
    })

    test('must return path without base url when process.env.BASE_URL is absent', () => {
      jest.resetModules()
      const { blogPagePath } = requirePath()
      expect(blogPagePath).toBe('/blog')
    })
  })

  describe(' coursesPagePath', () => {
    test('must return path with base url when process.env.BASE_URL is present', () => {
      jest.resetModules()
      extendEnvironmentVariables()
      const { coursesPagePath } = requirePath()
      expect(coursesPagePath).toBe(`${process.env.BASE_URL}/courses`)
    })

    test('must return path without base url when process.env.BASE_URL is absent', () => {
      jest.resetModules()
      const { coursesPagePath } = requirePath()
      expect(coursesPagePath).toBe('/courses')
    })
  })
})

/* eslint-enable global-require */
