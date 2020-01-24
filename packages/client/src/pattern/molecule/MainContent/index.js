import React from 'react'
import cx from 'classnames'
import {
  main,
  mainModule,
  mainBackground,
  mainBackgroundImage,
  mainBackgroundDimmer,
  mainBackgroundCaption,
  mainBackgroundCaptionPrimaryHeader,
  mainBackgroundCaptionSecondaryHeader,
  mainAbout,
  mainAboutHeader,
  mainAboutHeaderSecondary,
  mainAboutHeaderTertiary,
  mainAboutMe,
  mainAboutMeContainer,
  mainAboutMeContainerImage,
} from './MainContent.scss'
import { mainContentDefaultProps, mainContentPropTypes } from './MainContent.props'
import Cover from '../../../asset/image/cover.jpg'
import Me from '../../../asset/image/me.png'

export function MainContent({ className }) {
  return (
    <main className={cx(className, main)}>
      <div className={mainModule}>
        <div className={mainBackground}>
          <picture>
            <img className={mainBackgroundImage} src={typeof window === 'undefined' ? 'mts/static/cover.jpg' : Cover} alt="cover" />
          </picture>
          <div className={mainBackgroundDimmer} />
          <div className={mainBackgroundCaption}>
            <h1 className={mainBackgroundCaptionPrimaryHeader}>MTS</h1>
            <h2 className={mainBackgroundCaptionSecondaryHeader}>React.js, Node.js and GraphQL</h2>
          </div>
        </div>
        <div className={mainAbout}>
          <div className={mainAboutHeader}>
            <h2 className={mainAboutHeaderSecondary}>About me</h2>
            <h3 className={mainAboutHeaderTertiary}>Get to know me before you dive into my content.</h3>
          </div>
          <div className={mainAboutMe}>
            <div className={mainAboutMeContainer}>
              <picture>
                <img className={mainAboutMeContainerImage} src={typeof window === 'undefined' ? 'mts/static/me.jpg' : Me} alt="cover" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

MainContent.defaultProps = mainContentDefaultProps

MainContent.propTypes = mainContentPropTypes
