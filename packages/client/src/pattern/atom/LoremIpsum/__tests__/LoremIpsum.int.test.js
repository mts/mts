import {
  paragraphX2SmallTimesOne,
  paragraphX1SmallTimesOne,
  paragraphSmallTimesOne,
  paragraphMediumTimesOne,
  paragraphLargeTimesOne,
  textX2SmallTimesOne,
  textX1SmallTimesOne,
  textSmallTimesOne,
  textMediumTimesOne,
  textLargeTimesOne,
} from './LoremIpsum.int.story'

describe('<LoremIpsum />', () => {
  describe('Render', () => {
    describe('Paragraph', () => {
      test('must match paragraphX2SmallTimesOne', () => {
        expect(global.renderToJSON(paragraphX2SmallTimesOne())).toMatchSnapshot()
      })

      test('must match paragraphX1SmallTimesOne', () => {
        expect(global.renderToJSON(paragraphX1SmallTimesOne())).toMatchSnapshot()
      })

      test('must match paragraphSmallTimesOne', () => {
        expect(global.renderToJSON(paragraphSmallTimesOne())).toMatchSnapshot()
      })

      test('must match paragraphMediumTimesOne', () => {
        expect(global.renderToJSON(paragraphMediumTimesOne())).toMatchSnapshot()
      })

      test('must match paragraphLargeTimesOne', () => {
        expect(global.renderToJSON(paragraphLargeTimesOne())).toMatchSnapshot()
      })
    })

    describe('Text', () => {
      test('must match textX2SmallTimesOne', () => {
        expect(global.renderToJSON(textX2SmallTimesOne())).toMatchSnapshot()
      })

      test('must match textX1SmallTimesOne', () => {
        expect(global.renderToJSON(textX1SmallTimesOne())).toMatchSnapshot()
      })

      test('must match textSmallTimesOne', () => {
        expect(global.renderToJSON(textSmallTimesOne())).toMatchSnapshot()
      })

      test('must match textMediumTimesOne', () => {
        expect(global.renderToJSON(textMediumTimesOne())).toMatchSnapshot()
      })

      test('must match textLargeTimesOne', () => {
        expect(global.renderToJSON(textLargeTimesOne())).toMatchSnapshot()
      })
    })
  })
})
