import { paragraphSmallTimesOneRender, paragraphLargeTimesOneRender } from './LoremIpsum.int.render'

describe('<LoremIpsum />', () => {
  describe('Snaphot', () => {
    test('must match paragraphSmallTimesOneRender', () => {
      expect(global.renderToJSON(paragraphSmallTimesOneRender)).toMatchSnapshot()
    })

    test('must match paragraphLargeTimesOneRender', () => {
      expect(global.renderToJSON(paragraphLargeTimesOneRender)).toMatchSnapshot()
    })
  })
})
