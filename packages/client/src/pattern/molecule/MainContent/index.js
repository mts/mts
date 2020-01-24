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
  mainAboutSocialIcons,
  mainAboutSocialIconsIcon,
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
          <ul className={mainAboutSocialIcons}>
            <li className={mainAboutSocialIconsIcon}>
              <a
                href="https://twitter.com/hashtag/willsmith"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Go To Social Media: twitter-round"
              >
                <svg width="30px" height="30px" viewBox="0 0 49.652 49.652">
                  <path d="M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zm11.075 19.144c.011.246.017.494.017.742 0 7.551-5.746 16.255-16.259 16.255-3.227 0-6.231-.943-8.759-2.565.447.053.902.08 1.363.08 2.678 0 5.141-.914 7.097-2.446a5.72 5.72 0 0 1-5.338-3.969 5.76 5.76 0 0 0 2.58-.096 5.715 5.715 0 0 1-4.583-5.603l.001-.072a5.69 5.69 0 0 0 2.587.714 5.71 5.71 0 0 1-2.541-4.755c0-1.048.281-2.03.773-2.874a16.225 16.225 0 0 0 11.777 5.972 5.707 5.707 0 0 1-.147-1.303 5.714 5.714 0 0 1 9.884-3.91 11.406 11.406 0 0 0 3.63-1.387 5.74 5.74 0 0 1-2.516 3.162 11.36 11.36 0 0 0 3.282-.899 11.494 11.494 0 0 1-2.848 2.954z" />
                </svg>
              </a>
            </li>
            <li className={mainAboutSocialIconsIcon}>
              <a href="https://www.github.com/mts/" target="_blank" rel="noopener noreferrer" aria-label="Go To Social Media: github-round">
                <svg height="30px" viewBox="0 0 438.549 438.549" width="30px">
                  <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 0 1-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289s4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136s11.704-.476 16.274-1.423c4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z" />
                </svg>
              </a>
            </li>
            <li className={mainAboutSocialIconsIcon}>
              <a
                href="https://www.facebook.com/Will-Smith-92304305160/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Go To Social Media: facebook-round"
              >
                <svg width="30px" height="30px" viewBox="0 0 97.75 97.75">
                  <path d="M48.875 0C21.882 0 0 21.882 0 48.875S21.882 97.75 48.875 97.75 97.75 75.868 97.75 48.875 75.868 0 48.875 0zm18.646 24.89l-6.76.003c-5.301 0-6.326 2.519-6.326 6.215v8.15h12.641l-.006 12.765H54.436v32.758H41.251V52.023H30.229V39.258h11.022v-9.414c0-10.925 6.675-16.875 16.42-16.875l9.851.015V24.89h-.001z" />
                </svg>
              </a>
            </li>
            <li className={mainAboutSocialIconsIcon}>
              <a href="mailto:will@belairathletics.com/" target="_blank" rel="noopener noreferrer" aria-label="Go To Social Media: email">
                <svg viewBox="0 0 512 512" height="30px" width="30px">
                  <path d="M507.49 101.721L352.211 256 507.49 410.279c2.807-5.867 4.51-12.353 4.51-19.279V121c0-6.927-1.703-13.412-4.51-19.279zM467 76H45c-6.927 0-13.412 1.703-19.279 4.51l198.463 197.463c17.548 17.548 46.084 17.548 63.632 0L486.279 80.51C480.412 77.703 473.927 76 467 76zM4.51 101.721C1.703 107.588 0 114.073 0 121v270c0 6.927 1.703 13.413 4.51 19.279L159.789 256 4.51 101.721z" />
                  <path d="M331 277.211l-21.973 21.973c-29.239 29.239-76.816 29.239-106.055 0L181 277.211 25.721 431.49C31.588 434.297 38.073 436 45 436h422c6.927 0 13.412-1.703 19.279-4.51L331 277.211z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

MainContent.defaultProps = mainContentDefaultProps

MainContent.propTypes = mainContentPropTypes
