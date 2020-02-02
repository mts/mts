import { defaultRender } from './LoremIpsum.int.render'

describe('<LoremIpsum />', () => {
  describe('Snaphot', () => {
    test('must match defaultRender', () => {
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
