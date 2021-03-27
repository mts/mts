import { regular } from './Navigation.int.story'

jest.mock('react-router-dom', () => ({ Link: () => <div /> }))

describe('<Navigation />', () => {
  describe('Render', () => {
    test('must match regular', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
