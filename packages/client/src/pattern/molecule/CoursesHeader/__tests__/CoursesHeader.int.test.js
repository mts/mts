import { defaultRender } from './CoursesHeader.int.render'

describe('<CoursesHeader />', () => {
  describe('Snaphot', () => {
    test('must match defaultRender', () => {
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
