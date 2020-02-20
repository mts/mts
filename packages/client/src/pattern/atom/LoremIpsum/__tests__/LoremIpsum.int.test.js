import {
  paragraphX2SmallTimesOneRender,
  paragraphX1SmallTimesOneRender,
  paragraphSmallTimesOneRender,
  paragraphMediumTimesOneRender,
  paragraphLargeTimesOneRender,
  textX2SmallTimesOneRender,
  textX1SmallTimesOneRender,
  textSmallTimesOneRender,
  textMediumTimesOneRender,
  textLargeTimesOneRender,
} from './LoremIpsum.int.render'

describe('<LoremIpsum />', () => {
  describe('Snaphot', () => {
    describe('Paragraph', () => {
      test('must match paragraphX2SmallTimesOneRender', () => {
        expect(global.renderToJSON(paragraphX2SmallTimesOneRender)).toMatchSnapshot()
      })

      test('must match paragraphX1SmallTimesOneRender', () => {
        expect(global.renderToJSON(paragraphX1SmallTimesOneRender)).toMatchSnapshot()
      })

      test('must match paragraphSmallTimesOneRender', () => {
        expect(global.renderToJSON(paragraphSmallTimesOneRender)).toMatchSnapshot()
      })

      test('must match paragraphMediumTimesOneRender', () => {
        expect(global.renderToJSON(paragraphMediumTimesOneRender)).toMatchSnapshot()
      })

      test('must match paragraphLargeTimesOneRender', () => {
        expect(global.renderToJSON(paragraphLargeTimesOneRender)).toMatchSnapshot()
      })
    })

    describe('Text', () => {
      test('must match textX2SmallTimesOneRender', () => {
        expect(global.renderToJSON(textX2SmallTimesOneRender)).toMatchSnapshot()
      })

      test('must match textX1SmallTimesOneRender', () => {
        expect(global.renderToJSON(textX1SmallTimesOneRender)).toMatchSnapshot()
      })

      test('must match textSmallTimesOneRender', () => {
        expect(global.renderToJSON(textSmallTimesOneRender)).toMatchSnapshot()
      })

      test('must match textMediumTimesOneRender', () => {
        expect(global.renderToJSON(textMediumTimesOneRender)).toMatchSnapshot()
      })

      test('must match textLargeTimesOneRender', () => {
        expect(global.renderToJSON(textLargeTimesOneRender)).toMatchSnapshot()
      })
    })
  })
})
