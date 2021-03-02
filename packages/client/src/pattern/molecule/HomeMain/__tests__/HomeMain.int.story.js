import React from 'react'
import { withTests } from '@storybook/addon-jest'
import { HomeMain } from '../index'
import { homePageData } from '../../../../../../http-server/src/data/ui/home'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Pattern/Molecule/HomeMain',
  component: HomeMain,
  decorators: [withTests({ results })],
  parameters: { jest: ['HomeMain.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <HomeMain data={homePageData.mainContent} />
}
