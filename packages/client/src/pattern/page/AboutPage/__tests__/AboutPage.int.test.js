import { async, regular } from './AboutPage.int.story'

jest.mock('react-router-dom', () => ({ Link: () => <div /> }))

describe('<AboutPage />', () => {
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
