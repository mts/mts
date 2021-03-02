import { regular } from './CoursesContent.int.story'

describe('<CoursesContent />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
