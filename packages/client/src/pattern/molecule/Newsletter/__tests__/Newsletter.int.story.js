import React from 'react'
import { withTests } from '@storybook/addon-jest'
import { Newsletter } from '../index'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Pattern/Molecule/Newsletter',
  component: Newsletter,
  decorators: [withTests({ results })],
  parameters: { jest: ['Newsletter.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <Newsletter />
}
