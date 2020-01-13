import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withNotes } from '@storybook/addon-notes'
import { create } from '@storybook/theming'
import { version } from '../lerna.json'
import logo from './logo.png'
import { BrowserRouter } from 'react-router-dom'

const setup = () => {
  addDecorator(withInfo)
  addDecorator(withNotes)
  addParameters({
    options: {
      theme: create({
        base: 'light',
        brandTitle: `MTS v${version}`,
        brandUrl: 'https://github.com/mts/mts.github.io',
        brandImage: logo,
      }),
      isFullscreen: false,
      showNav: true,
      showPanel: false,
      sidebarAnimations: false,
    },
  })

  addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>)

  const contexts = [require.context('../packages/client/src', true, /story*\.js$/)]

  const loadStories = () => {
    require('./welcomeStory')
    contexts.forEach(context => {
      context
        .keys()
        .filter(key => !key.includes('node_modules'))
        .forEach(context)
    })
  }

  configure(loadStories, module)
}

setup()
