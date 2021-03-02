import React from 'react'
import { withTests } from '@storybook/addon-jest'
import { AsyncNotFoundPage } from '../AsyncNotFoundPage'
import { NotFoundPage } from '../NotFoundPage'
import results from '../../../../../../../.jest-test-results.json'

const location = {
  pathname: 'some-path-name',
}

export default {
  title: 'Pattern/Page/NotFoundPage',
  component: NotFoundPage,
  decorators: [withTests({ results })],
  parameters: { jest: ['NotFoundPage.int.test.js'] },
  excludeStories: ['custom'],
}

export function async() {
  return <AsyncNotFoundPage location={location} />
}

export function regular() {
  return <NotFoundPage location={location} />
}
