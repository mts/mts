import { async, regular } from './CoursesPage.int.story'

jest.mock('react-router-dom', () => ({ Link: () => <div /> }))

describe('<CoursesPage />', () => {
  afterEach(() => jest.clearAllMocks())

  describe('Render', () => {
    test('must match async', () => {
      expect(global.renderToJSON(async())).toMatchSnapshot()
    })

    test('must match regular', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
