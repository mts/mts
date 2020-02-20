import { defaultRender } from './CoursesContent.int.render'

describe('<CoursesContent />', () => {
  describe('Snaphot', () => {
    test('must match defaultRender', () => {
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
