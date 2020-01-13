import React from 'react'
import { storiesOf } from '@storybook/react'
import { version } from '../lerna.json'

storiesOf('MTS GitHub IO', module).add(`v${version} 🎉`, () => <h1>Welcome to {`MTS GitHub IO v${version}`}</h1>)
