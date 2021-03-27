import { regular } from './HomeTemplate.int.story'

jest.mock('react-router-dom', () => ({ Link: () => <div /> }))

describe('<HomeTemplate />', () => {
  describe('Render', () => {
    test('must match regular', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
