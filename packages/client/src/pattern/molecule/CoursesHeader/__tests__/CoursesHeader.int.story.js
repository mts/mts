import React from 'react'
import { withTests } from '@storybook/addon-jest'
import { CoursesHeader } from '../index'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Pattern/Molecule/CoursesHeader',
  component: CoursesHeader,
  decorators: [withTests({ results })],
  parameters: { jest: ['CoursesHeader.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <CoursesHeader />
}
