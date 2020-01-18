import React from 'react'
import cx from 'classnames'
import {
  main,
  mainModule,
  mainBackground,
  mainBackgroundDimmer,
  mainBackgroundCaption,
  mainBackgroundCaptionPrimaryHeader,
  mainBackgroundCaptionSecondaryHeader,
} from './MainContent.scss'
import { mainContentDefaultProps, mainContentPropTypes } from './MainContent.props'
import Cover from '../../../asset/image/cover.jpg'

export function MainContent({ className }) {
  return (
    <main className={cx(className, main)}>
      <div className={mainModule}>
        <div className={mainBackground}>
          <picture>
            <img src={Cover} alt="cover" />
          </picture>
          <div className={mainBackgroundDimmer} />
          <div className={mainBackgroundCaption}>
            <h1 className={mainBackgroundCaptionPrimaryHeader}>MTS</h1>
            <h2 className={mainBackgroundCaptionSecondaryHeader}>React.js, Node.js and GraphQL</h2>
          </div>
        </div>
      </div>
    </main>
  )
}

MainContent.defaultProps = mainContentDefaultProps

MainContent.propTypes = mainContentPropTypes
