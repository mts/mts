import { regular } from './CoursesHeader.int.story'

describe('<CoursesHeader />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
