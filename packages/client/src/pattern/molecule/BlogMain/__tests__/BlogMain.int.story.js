import React from 'react'
import { withTests } from '@storybook/addon-jest'
import { BlogMain } from '../index'
import { aboutPageData } from '../../../../../../http-server/src/data/ui/about'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Pattern/Molecule/BlogMain',
  component: BlogMain,
  decorators: [withTests({ results })],
  parameters: { jest: ['BlogMain.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <BlogMain data={aboutPageData.mainContent} />
}
