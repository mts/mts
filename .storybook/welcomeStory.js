import React from 'react'
import { storiesOf } from '@storybook/react'
import { version } from '../lerna.json'

storiesOf('MTS', module).add(`v${version} 🎉`, () => <h1>Welcome to {`MTS v${version}`}</h1>)
