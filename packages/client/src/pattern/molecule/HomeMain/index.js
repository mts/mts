import React, { useEffect } from 'react'
import {
  container1,
  container1Background,
  container1BackgroundImage,
  container1BackgroundDimmer,
  container1BackgroundCaption,
  container1BackgroundCaptionH1,
  container1BackgroundCaptionH2,
  container1About,
  container1AboutSectionHeader,
  container1AboutSectionHeaderH2,
  container1AboutSectionHeaderH3,
  container1AboutImage,
  container1AboutImageContainer1,
  container1AboutSocialIcons,
  container1AboutSocialIconsIcon,
  container1AboutText,
  container1Services,
  container1ServicesHeader,
  container1ServicesHeaderH2,
  container1ServicesHeaderH3,
  container1ServicesItems,
  container1ServicesItemsItem,
  container1Portfolio,
  container1PortfolioHeader,
  container1PortfolioHeaderH2,
  container1PortfolioHeaderH3,
  container1PortfolioItems,
  container1PortfolioItemsItem,
  container1PortfolioItemsItemImage,
  container1PortfolioItemsItemCaption,
  container1Timeline,
  container1TimelineSectionHeader,
  container1TimelineSectionHeaderH2,
  container1TimelineSectionHeaderH3,
  container1TimelineItems,
  container1TimelineItemsItem,
  container1TimelineItemsItemMemoryImage,
  container1TimelineItemsItemMemoryImageContainer,
  container1TimelineItemsItemCaption,
  container1TimelineItemsItemNewestMemory,
  container1Test,
  container1TestSectionHeader,
  container1TestSectionHeaderH2,
  container1TestSectionHeaderH3,
  container1TestItems,
  container1TestItemsItem,
  container1TestItemsItemImage,
  container1TestItemsItemImageContainer,
  container1TestItemsItemCaption,
  container1TestItemsItemCaptionP1,
  container1TestItemsItemCaptionP2,
} from './HomeMain.scss'
import { homeMainDefaultProps, homeMainPropTypes } from './HomeMain.props'
import { windowObjectExists } from '../../../../../library/src/environment'
import Cover from '../../../asset/image/cover.jpg'
import Me from '../../../asset/image/me.jpg'
import PortfolioOne from '../../../asset/image/portfolio/portfolio-1.jpg'
import PortfolioTwo from '../../../asset/image/portfolio/portfolio-2.jpg'
import PortfolioThree from '../../../asset/image/portfolio/portfolio-3.jpg'
import TimelineOne from '../../../asset/image/timeline/timeline-1.jpg'
import TimelineTwo from '../../../asset/image/timeline/timeline-2.jpg'
import TimelineThree from '../../../asset/image/timeline/timeline-3.jpg'
import TimelineFour from '../../../asset/image/timeline/timeline-4.jpg'
import TimelineFive from '../../../asset/image/timeline/timeline-5.jpg'
import TimelineSix from '../../../asset/image/timeline/timeline-6.jpg'
import TimelineSeven from '../../../asset/image/timeline/timeline-7.jpg'
import TimelineEight from '../../../asset/image/timeline/timeline-8.jpg'
import TimelineNine from '../../../asset/image/timeline/timeline-9.jpg'
import TestimonialOne from '../../../asset/image/testimonial/testimonial-1.jpg'
import TestimonialTwo from '../../../asset/image/testimonial/testimonial-2.jpg'
import TestimonialThree from '../../../asset/image/testimonial/testimonial-3.jpg'
import TestimonialFour from '../../../asset/image/testimonial/testimonial-4.jpg'
import TestimonialFive from '../../../asset/image/testimonial/testimonial-5.jpg'
import TestimonialSix from '../../../asset/image/testimonial/testimonial-6.jpg'
import { handleStickyNavBar } from '../../../../../library/src/client/navBar'
import { LoremIpsum } from '../../atom/placeholder/LoremIpsum'
import { element } from '../../../../../library/src/client/dom'
import { size } from '../../../../../library/src/client/placeholder'

export function HomeMain({ className }) {
  useEffect(() => {
    handleStickyNavBar()
  })

  return (
    <main className={className} style={{ marginTop: '0', display: 'flex', justifyContent: 'center' }}>
      <div className={container1}>
        <div className={container1Background}>
          <div className={container1BackgroundImage}>
            <div style={{ width: '100%', paddingBottom: '66.6992%' }} />
            <picture>
              <img src={!windowObjectExists ? 'mts/static/cover.jpg' : Cover} alt="cover" />
            </picture>
          </div>
          <div className={container1BackgroundDimmer} />
          <div className={container1BackgroundCaption}>
            <h1 className={container1BackgroundCaptionH1}>MTS</h1>
            <h2 className={container1BackgroundCaptionH2}>React.js, Node.js and GraphQL</h2>
          </div>
        </div>

        <div className={container1About}>
          <div className={container1AboutSectionHeader}>
            <h2 className={container1AboutSectionHeaderH2}>About me</h2>
            <h3 className={container1AboutSectionHeaderH3}>Get to know me before you dive into my content.</h3>
          </div>
          <div className={container1AboutImage}>
            <div className={container1AboutImageContainer1}>
              <div style={{ width: '100%', paddingBottom: '100%' }} />
              <picture>
                <img src={!windowObjectExists ? 'mts/static/me.jpg' : Me} alt="me" />
              </picture>
            </div>
          </div>

          <ul className={container1AboutSocialIcons}>
            <li className={container1AboutSocialIconsIcon}>
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
            <li className={container1AboutSocialIconsIcon}>
              <a href="https://www.github.com/mts" target="_blank" rel="noopener noreferrer" aria-label="Go To Social Media: github-round">
                <svg height="30px" viewBox="0 0 438.549 438.549" width="30px">
                  <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 0 1-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289s4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136s11.704-.476 16.274-1.423c4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z" />
                </svg>
              </a>
            </li>
            <li className={container1AboutSocialIconsIcon}>
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
            <li className={container1AboutSocialIconsIcon}>
              <a href="mailto:will@belairathletics.com/" target="_blank" rel="noopener noreferrer" aria-label="Go To Social Media: email">
                <svg viewBox="0 0 512 512" height="30px" width="30px">
                  <path d="M507.49 101.721L352.211 256 507.49 410.279c2.807-5.867 4.51-12.353 4.51-19.279V121c0-6.927-1.703-13.412-4.51-19.279zM467 76H45c-6.927 0-13.412 1.703-19.279 4.51l198.463 197.463c17.548 17.548 46.084 17.548 63.632 0L486.279 80.51C480.412 77.703 473.927 76 467 76zM4.51 101.721C1.703 107.588 0 114.073 0 121v270c0 6.927 1.703 13.413 4.51 19.279L159.789 256 4.51 101.721z" />
                  <path d="M331 277.211l-21.973 21.973c-29.239 29.239-76.816 29.239-106.055 0L181 277.211 25.721 431.49C31.588 434.297 38.073 436 45 436h422c6.927 0 13.412-1.703 19.279-4.51L331 277.211z" />
                </svg>
              </a>
            </li>
          </ul>
          <div className={container1AboutText}>
            <LoremIpsum container={element.paragraph} length={size.small} count={1} />
          </div>
        </div>
        <div className={container1Services}>
          <div className={container1ServicesHeader}>
            <h2 className={container1ServicesHeaderH2}>What I offer</h2>
            <h3 className={container1ServicesHeaderH3}>Why you might want to hire me.</h3>
          </div>
          <ul className={container1ServicesItems}>
            <li className={container1ServicesItemsItem}>
              <svg viewBox="0 0 612 612" height="60px" width="60px">
                <path d="M447.394 429.883H185.822c-4.207 0-8.144 1.75-10.804 4.801s-3.857 7.19-3.283 11.356l25.792 151.535c1.169 8.098 8.46 14.425 16.65 14.425h204.865c8.189 0 15.48-6.326 16.65-14.424l25.763-151.348.029-.188c.573-4.166-.623-8.305-3.282-11.356-2.661-3.051-6.6-4.801-10.808-4.801zM464.972 314.577H321.375v-75.279c.216-.181.434-.36.649-.569 8.385-8.171 22.182-12.549 38.157-17.621 29.136-9.247 65.396-20.757 87.935-62.663 12.157-22.608 18.55-53.377 18-86.643-.439-26.614-5.439-52.364-12.438-64.076C450.614 2.599 447 0 442.936 0c-2.161 0-5.319.77-8.087 4.434-6.812 9.017-21.476 13.579-38.456 18.86-29.086 9.046-65.284 20.305-87.042 60.752-10.962 20.382-16.094 44.868-17.426 68.348-5.319-8.698-12.412-17.157-22.032-25.025-29.923-24.465-75.143-33.146-104.776-33.146-18.874 0-29.899 3.263-32.768 9.696-.712 1.597-1.938 5.787 2.038 10.212 6.446 7.177 7.901 20.42 9.589 35.755 2.927 26.623 6.571 59.756 37.912 85.385 29.348 23.997 72.082 32.55 102.288 32.55 4.249 0 8.846-.169 13.277-.648v47.406H168.247c-8.509 0-15.432 6.922-15.432 15.431v60.096c0 8.508 6.923 15.43 15.432 15.43h296.725c8.509 0 15.431-6.922 15.431-15.43V330.01c0-8.511-6.922-15.433-15.431-15.433zm-189.627-91.075l-.516-.535-.129-.133-.032-.035c-.035-.041.191.238.08.108l-.063-.056-.251-.225-2.024-1.817c-1.437-1.159-2.844-2.375-4.393-3.507-6.103-4.598-13.296-8.773-20.982-12.792-7.659-4.051-15.766-8.013-23.263-12.613-3.747-2.291-7.326-4.758-10.588-7.378-3.258-2.617-6.155-5.478-8.517-8.392-2.342-2.935-4.216-5.856-5.412-8.669a18.082 18.082 0 0 1-.829-2.032 59.904 59.904 0 0 1-.669-1.914c-.327-1.268-.621-2.402-.821-3.447a66.495 66.495 0 0 1-.359-2.828c-.083-.8-.033-1.471-.047-2.023l.029-1.692.902 1.431c.299.459.616 1.072 1.06 1.71l1.5 2.105c.604.74 1.271 1.561 2 2.453.838.805 1.553 1.758 2.547 2.605.468.432.95.878 1.445 1.338l1.62 1.311c.531.453 1.155.86 1.743 1.304.586.444 1.204.878 1.875 1.283 2.584 1.704 5.51 3.351 8.777 4.928 3.25 1.6 6.813 3.137 10.577 4.74 7.526 3.196 15.911 6.612 24.231 10.965 4.15 2.18 8.275 4.621 12.187 7.362 3.915 2.737 7.604 5.807 10.879 9.127 1.649 1.642 3.161 3.393 4.574 5.143.675.904 1.343 1.799 2.005 2.683l.244.329.062.084c-.09-.11.158.193.141.175l.025.039.102.157.402.626c.261.42.522.836.777 1.252a290.056 290.056 0 0 1 5.653 9.473c.831 1.502 1.651 2.924 2.39 4.308a145.985 145.985 0 0 1 2.021 4.005c.411.847.792 1.646 1.159 2.423v6.893c-.237-.191-.468-.377-.721-.585a171.361 171.361 0 0 1-5.506-4.708l-6.925-6.277a288.416 288.416 0 0 1-7.918-7.661c-.348-.343-.693-.691-1.042-1.041zm66.045-35.429l.524-.667.13-.167.032-.042c.027-.032-.121.127-.044.041l.055-.08.224-.321 1.804-2.584c1.129-1.811 2.323-3.607 3.398-5.551 4.397-7.68 8.083-16.564 11.449-25.941 3.406-9.356 6.585-19.169 10.521-28.367 1.96-4.595 4.128-9.025 6.513-13.115 2.379-4.091 5.08-7.807 7.922-10.942 2.871-3.115 5.796-5.713 8.716-7.541.694-.49 1.413-.907 2.118-1.285.693-.391 1.366-.75 2.012-1.088 1.352-.592 2.567-1.126 3.694-1.541a81.887 81.887 0 0 1 3.084-.922c.878-.243 1.637-.319 2.252-.439l1.892-.294-1.507 1.182c-.482.39-1.133.821-1.803 1.397l-2.213 1.954-2.546 2.573c-.421.496-.859 1.014-1.315 1.549a16.27 16.27 0 0 0-1.343 1.681c-.435.59-.886 1.197-1.35 1.823l-1.293 2.021c-.456.667-.837 1.434-1.27 2.167l-.64 1.122-.587 1.198c-1.615 3.186-3.109 6.768-4.458 10.724-1.376 3.94-2.624 8.227-3.902 12.744-2.543 9.033-5.142 19.047-8.755 29.099-1.812 5.018-3.906 10.036-6.36 14.863-2.447 4.829-5.289 9.449-8.466 13.65-1.567 2.112-3.277 4.085-4.996 5.955l-2.665 2.682-.327.327-.081.083-.116.121-.039.035-.158.144-.629.569-1.264 1.11c-1.686 1.459-3.305 2.899-4.912 4.252-1.582 1.353-3.251 2.652-4.806 3.871-1.582 1.208-3.076 2.38-4.53 3.458-1.459 1.062-2.819 2.053-4.136 2.964a278.33 278.33 0 0 1-6.862 4.641c-3.844 2.52-6.195 3.837-6.195 3.837s1.289-2.341 3.814-6.217c1.255-1.953 2.834-4.247 4.677-6.848a759.279 759.279 0 0 1 6.226-8.552l7.492-9.992c.336-.447.675-.892 1.019-1.341z" />
              </svg>
              <h4>Workshops</h4>
              <LoremIpsum container={element.paragraph} length={size.x2Small} count={1} />
            </li>
            <li className={container1ServicesItemsItem}>
              <svg viewBox="0 0 455 455" height="60px" width="60px">
                <path d="M370.5 158.498h-60v69h-69v60h69v69h60v-69h69v-60h-69z" />
                <path d="M211.5 197.498h69v-69h120v69h34.799c12.468-20 19.701-42.674 19.701-67.53C455 60.686 398.847 4.51 329.579 4.51c-42.087 0-79.329 20.731-102.079 52.544C204.75 25.24 167.508 4.501 125.421 4.501 56.153 4.501 0 60.664 0 129.947c0 30.118 10.612 57.752 28.299 79.376L227.5 450.499l53-64.169v-68.832h-69v-120z" />
              </svg>
              <h4>Code Audit</h4>
              <LoremIpsum container={element.paragraph} length={size.x2Small} count={1} />
            </li>
            <li className={container1ServicesItemsItem}>
              <svg width="60px" height="60px" viewBox="0 0 557.506 557.506">
                <path d="M196.261 310.341v73.893c0 5.948 4.822 10.771 10.774 10.771 5.952 0 10.774-4.823 10.774-10.771v-67.14l-34.128-36.022a31.813 31.813 0 0 1-7.864-29.403l8.213-34.223h-9.599l7.2-10.921a22.063 22.063 0 0 0 4.792 1.582 31.864 31.864 0 0 1 8.449-13.103c4.954-4.615 11.353-7.595 18.36-8.333a32.194 32.194 0 0 1 3.186-.187V151.23c0-5.949-4.823-10.771-10.771-10.771s-10.771 4.826-10.771 10.771v12.999a22.328 22.328 0 0 0-3.966-.374 22.32 22.32 0 0 0-3.99.376v-30.673c0-5.949-4.822-10.771-10.774-10.771-5.948 0-10.771 4.822-10.771 10.771v58.489l-5.217 7.916-5.217-7.916v-58.489c0-5.949-4.823-10.771-10.771-10.771s-10.771 4.822-10.771 10.771v30.673a22.599 22.599 0 0 0-3.99-.376 22.24 22.24 0 0 0-7.812 1.432v-50.089c0-5.949-4.823-10.771-10.774-10.771s-10.771 4.823-10.771 10.771v58.489l-6.613 10.034v-50.163c0-5.949-4.823-10.771-10.771-10.771s-10.771 4.822-10.771 10.771v13.369a22.273 22.273 0 0 0-7.812-1.432c-12.344 0-22.351 10.006-22.351 22.35 0 12.344 10.006 22.351 22.351 22.351a22.24 22.24 0 0 0 7.812-1.432v6.512c0 1.31.266 2.595.725 3.807H44.852l-16.741-25.398V115.2c0-5.949-4.823-10.771-10.771-10.771S6.568 109.25 6.568 115.198v61.72c0 2.108.618 4.167 1.778 5.927l29.051 44.076v47.09a10.89 10.89 0 0 0-.214 2.136v89.728c0 5.949 4.822 10.771 10.771 10.771s10.774-4.822 10.774-10.771V291.98h10.71v73.893c0 5.949 4.823 10.771 10.774 10.771s10.774-4.822 10.774-10.771v-89.728c0-.731-.076-1.444-.214-2.136v-46.867l11.955 18.137v47.09a10.89 10.89 0 0 0-.214 2.136v89.729c0 5.948 4.822 10.771 10.774 10.771 5.949 0 10.771-4.823 10.771-10.771v-73.893h10.71v73.893c0 5.948 4.822 10.771 10.771 10.771s10.771-4.823 10.771-10.771v-89.729c0-.731-.077-1.444-.214-2.136v-47.09l4.067-6.172 4.066 6.172v47.09a10.89 10.89 0 0 0-.214 2.136v89.729c0 5.948 4.822 10.771 10.771 10.771s10.774-4.823 10.774-10.771v-73.893h10.701zM129.4 217.445h-19.23l-6.582-9.988 6.555-9.945c3.886 6.6 11.043 11.043 19.256 11.043 3.314 0 6.445-.741 9.275-2.032l7.2 10.921H129.4zM240.977 197.839a53.422 53.422 0 0 1 3.595-5.107 53.963 53.963 0 0 1 3.847-4.342 54.063 54.063 0 0 1 7.831-6.505 53.656 53.656 0 0 1 9.869-5.306v-17.274c0-5.948-4.823-10.771-10.771-10.771-2.653 0-5.052.998-6.928 2.585v-17.561c0-5.949-4.823-10.771-10.774-10.771s-10.771 4.822-10.771 10.771v54.633a31.521 31.521 0 0 1 6.897 3.326 31.75 31.75 0 0 1 7.205 6.322zM233.902 334.086l-8.418-8.886v64.327l8.418-10.288zM537.135 112.499c-5.947 0-10.771 4.823-10.771 10.771v58.489l-16.74 25.398h-27.766c.459-1.215.725-2.497.725-3.807v-6.512a22.273 22.273 0 0 0 7.809 1.432c12.344 0 22.35-10.006 22.35-22.35 0-12.344-10.006-22.351-22.35-22.351-2.75 0-5.377.521-7.809 1.432v-13.369c0-5.949-4.822-10.771-10.775-10.771-5.947 0-10.77 4.822-10.77 10.771v50.166l-6.617-10.034v-58.495c0-5.949-4.822-10.771-10.77-10.771-5.949 0-10.775 4.823-10.775 10.771v50.089a22.277 22.277 0 0 0-7.812-1.432c-1.363 0-2.691.141-3.99.376V141.63c0-5.949-4.822-10.771-10.771-10.771-5.947 0-10.77 4.822-10.77 10.771v58.489l-5.219 7.916-.82-1.242v41.632l.82-1.242 4.066 6.172v47.09a10.966 10.966 0 0 0-.213 2.136v89.729c0 5.948 4.822 10.771 10.773 10.771 5.949 0 10.771-4.823 10.771-10.771v-73.893h10.71v73.893c0 5.948 4.822 10.771 10.77 10.771 5.949 0 10.775-4.823 10.775-10.771v-89.73c0-.731-.076-1.444-.215-2.136v-47.09l11.955-18.137v46.868a10.966 10.966 0 0 0-.213 2.136v89.728c0 5.949 4.822 10.771 10.773 10.771s10.771-4.822 10.771-10.771v-73.893h10.709v73.893c0 5.949 4.824 10.771 10.775 10.771s10.771-4.822 10.771-10.771v-89.728c0-.731-.076-1.444-.215-2.136v-47.091l29.051-44.076a10.767 10.767 0 0 0 1.779-5.927v-61.72c.003-5.946-4.819-10.772-10.772-10.772zM444.301 225.52H408.6l7.201-10.921a22.211 22.211 0 0 0 9.275 2.032c8.213 0 15.373-4.443 19.256-11.043l6.555 9.945-6.586 9.987zM390.252 263.305c-.602 1.236-1.254 2.448-2.02 3.608l-42.299 64.177v66.772c.221 1.524.334 3.061.334 4.581v.517c.389.043.771.12 1.172.12 5.949 0 10.771-4.823 10.771-10.771v-73.893h10.71v73.893c0 5.948 4.822 10.771 10.773 10.771s10.771-4.823 10.771-10.771V302.58c0-.731-.076-1.444-.215-2.136v-37.139zM327.596 141.63c0-5.949-4.822-10.771-10.771-10.771-5.947 0-10.773 4.822-10.773 10.771v1.411c-1.879-1.591-4.275-2.586-6.928-2.586-5.949 0-10.771 4.826-10.771 10.771v21.432c6.227.223 12.186 1.497 17.699 3.678a54.003 54.003 0 0 1 3.844 1.713c6.832 3.348 12.873 8.057 17.699 13.844V141.63h.001zM95.18 94.372c6.426-8.433 6.714-20.294 1.401-29.572-5.747-10.034-30.863-29.146-16.992-40.264 7.699-6.172-3.201-16.925-10.82-10.82-9.033 7.24-9.893 18.354-6.75 28.88C66.208 56.62 93.727 71.213 81.97 86.648c-5.986 7.852 7.313 15.459 13.21 7.724zM494.023 28.985c9.816-.994 6.514-15.945-3.197-14.963-11.52 1.166-18.281 10.024-21.365 20.569-4.109 14.048 11.055 41.258-7.203 47.818-9.291 3.338-2.266 16.952 6.887 13.663 9.979-3.586 16.668-13.385 17.254-24.058.628-11.544-10.063-41.238 7.624-43.029zM194.348 92.688c1.643 10.563 9.275 19.651 19.56 22.225 9.437 2.362 15.074-11.882 5.499-14.281-18.822-4.715-6.438-33.296-11.921-46.867-4.116-10.187-11.726-18.33-23.305-18.345-9.761-.012-11.563 15.193-1.695 15.205 17.771.028 10.087 30.641 11.862 42.063zM381.332 37.851c4.498-10.025 5.105-21.154-2.904-29.517-6.75-7.053-18.969 2.179-12.145 9.306 12.293 12.84-15.113 28.495-22.127 37.687-6.484 8.5-7.754 20.297-2.488 29.501 4.83 8.442 19.01 2.647 14.111-5.924-9.633-16.84 19.563-27.696 25.553-41.053zM243.213 53.885c4.097 9.875 13.666 16.895 24.266 16.958 9.728.061 11.83-15.113 1.958-15.177-19.403-.123-14.14-30.824-22.684-42.708-6.414-8.923-15.735-15.031-26.986-12.301-9.489 2.301-7.638 17.5 1.952 15.174 17.281-4.186 17.063 27.375 21.494 38.054zM135.128 95.73c13.813 0 13.813-21.42 0-21.42s-13.813 21.42 0 21.42zM32.618 65.13c13.812 0 13.812-21.42 0-21.42-13.813 0-13.813 21.42 0 21.42zM320.258 16.17c-13.812 0-13.812 21.42 0 21.42s13.812-21.42 0-21.42zM300.367 92.67c13.814 0 13.814-21.42 0-21.42-13.812 0-13.812 21.42 0 21.42zM418.178 60.541c13.812 0 13.812-21.42 0-21.42s-13.813 21.42 0 21.42zM540.578 62.07c-13.812 0-13.812 21.42 0 21.42s13.813-21.42 0-21.42z" />
                <path d="M336.666 317.348l38.791-58.853a16.599 16.599 0 0 0 2.742-9.143V132.087c0-.407-.031-.808-.061-1.208-.621-8.611-7.789-15.41-16.562-15.41-9.18 0-16.617 7.442-16.617 16.619V244.366l-8.08 12.255-17.746 26.931h-66.235l-27.775-29.321 5.508-22.947 2.161-9c.006-.031.009-.064.018-.095.101-.438.181-.875.245-1.31.021-.217.058-.428.083-.646a16.43 16.43 0 0 0-.331-5.584 16.583 16.583 0 0 0-12.298-12.408c-.107-.024-.211-.034-.318-.058a16.614 16.614 0 0 0-3.586-.41c-.064 0-.125.016-.189.016-7.427.085-14.134 5.18-15.946 12.729l-.701 2.922-1.083 4.516-7.986 33.278a16.627 16.627 0 0 0 4.094 15.312l23.014 24.297 7.895 8.335 23.5 24.811v56.71l-2.172 2.653-18.238 22.289-34.798 42.537c-5.566 6.809-4.872 16.771 1.591 22.741l42.344 39.089a16.555 16.555 0 0 0 11.267 4.406c4.477 0 8.941-1.799 12.215-5.346 6.227-6.747 5.805-17.258-.939-23.488l-30.839-28.468 28.015-34.234h40.079v114.009c0 9.177 7.443 16.619 16.619 16.619 9.178 0 16.619-7.442 16.619-16.619v-138.44a16.68 16.68 0 0 0-.334-3.299v-72.641l6.034-9.159z" />
                <path d="M249.171 235.116a38.376 38.376 0 0 0 18.844 24.701 38.024 38.024 0 0 0 11.056 3.984c2.381.462 4.832.722 7.344.722 15.055 0 28.045-8.703 34.314-21.331 1.463-2.947 2.59-6.089 3.256-9.407.494-2.454.76-4.994.76-7.595 0-2.996-.379-5.896-1.029-8.693-2.02-8.7-6.99-16.249-13.818-21.555a38.47 38.47 0 0 0-3.844-2.623 38.12 38.12 0 0 0-7.402-3.427 38.195 38.195 0 0 0-10.296-1.934c-.646-.034-1.285-.098-1.94-.098a38.144 38.144 0 0 0-20.297 5.857c-9.706 6.08-16.505 16.355-17.8 28.308-.024.217-.027.434-.058.651a38.936 38.936 0 0 0-.159 3.127c0 .128-.019.254-.019.386 0 1.239.071 2.46.187 3.669.17 1.797.491 3.545.901 5.258z" />
              </svg>
              <h4>MVP</h4>
              <p>
                Bringing your idea to code from zero to one as a minimal viable product (MVP) and beyond within a well-architected
                application.
              </p>
            </li>
            <li className={container1ServicesItemsItem}>
              <svg width="60px" height="60px" viewBox="0 0 96 96">
                <path d="M0 83.429h96v3.429H0zM12.264 73.271l14.564-14.564a5.058 5.058 0 0 0 1.382-4.588l3.389-3.392c7.651 5.729 18.578 5.121 25.531-1.832 7.622-7.622 7.622-20.025 0-27.647-7.623-7.623-20.027-7.623-27.649 0-6.951 6.952-7.561 17.878-1.831 25.53l-3.391 3.39a5.065 5.065 0 0 0-4.589 1.381L5.105 66.112a5.062 5.062 0 1 0 7.159 7.159zm21.167-48.072c5.444-5.445 14.304-5.445 19.749 0 5.445 5.444 5.443 14.304 0 19.748-5.445 5.445-14.305 5.445-19.749 0-5.447-5.446-5.447-14.303 0-19.748zM81.521 9.143h7.429v72h-7.429zM73.521 20.892h-7.43v8.661c.479 1.89.754 3.845.754 5.847a23.67 23.67 0 0 1-.754 5.848v39.896h7.43V20.892zM49.977 81.143h7.428v-26.91a23.285 23.285 0 0 1-7.428 3.748v23.162z" />
                <path d="M33.234 81.143h7.429V58.787A23.288 23.288 0 0 1 36.71 58h-3.476v23.143zM16.262 81.143h7.427V69.57h-1.74l-5.687 5.688z" />
              </svg>
              <h4>Complex Problems</h4>
              <p>
                Solving complex problems in JavaScript code which you want to have eliminated in your application&apos;s code base but no
                one dares to fix.
              </p>
            </li>
            <li className={container1ServicesItemsItem}>
              <svg viewBox="0 0 512 512" height="60px" width="60px">
                <path d="M139.13 105.739h-22.26c-22.204 0-40.859 14.619-47.407 34.664C30.096 147.099 0 181.362 0 222.609s30.096 75.51 69.463 82.206c6.548 20.045 25.203 34.664 47.407 34.664h22.261c20.186 0 40.717.963 61.217 2.71v-239.16c-20.5 1.746-41.031 2.71-61.218 2.71zM66.783 269.836c-19.435-6.891-33.391-25.461-33.391-47.228s13.956-40.337 33.391-47.229v94.457zM227.173 448.956l-11.961-71.751c-25.366-2.785-50.991-4.335-76.082-4.335h-22.26c-1.124 0-2.217-.125-3.331-.169l15.559 91.995a49.949 49.949 0 0 0 49.38 41.739c30.506 0 53.707-27.419 48.695-57.479zM478.609 5.565c-18.442 0-33.391 14.949-33.391 33.391V406.26c0 18.442 14.949 33.391 33.391 33.391S512 424.703 512 406.261V38.957c0-18.442-14.949-33.392-33.391-33.392zM233.739 99.385v246.447c79.481 10.338 119.878 26.156 178.087 46.119V53.266c-57.784 19.815-98.276 35.739-178.087 46.119z" />
              </svg>
              <h4>Writing Code</h4>
              <p>
                Coding along with your team on a large scale application to make your customers happy with new features and performance
                improvements.
              </p>
            </li>
            <li className={container1ServicesItemsItem}>
              <svg viewBox="-61 0 511 512" height="60px" width="60px">
                <path d="M39.29 361l-30 30h252.42l-30-30zm0 0M.5 421h270v91H.5zm0 0M369.637 2.93c-3.254.468-80.13 14.218-135.719 69.808-55.59 55.59-67.41 132.465-67.883 135.719l-.234 1.602c-15.047 19.457-27.461 39.156-38.98 60.941H30.5v30h30v30h150v-30h30v-30h-79.168c9.82-16.89 19.543-32.207 31.695-47.441 17.453-3.817 55.012-14.18 91.575-38.278l6.738-4.453V150h33.531l4.496-3.86c46.582-54.214 56.867-121.437 57.278-124.277L389.559 0zm0 0" />
              </svg>
              <h4>Technical Writing</h4>
              <p>
                Writing tutorials about your technical product, open source work, or API (all related to JavaScript) to get more publicity
                for it.
              </p>
            </li>
          </ul>
        </div>
        <div className={container1Portfolio}>
          <div className={container1PortfolioHeader}>
            <h2 className={container1PortfolioHeaderH2}>Portfolio</h2>
            <h3 className={container1PortfolioHeaderH3}>What you can learn from me.</h3>
          </div>
          <ul className={container1PortfolioItems}>
            <li className={container1PortfolioItemsItem}>
              <a
                href="https://mtsonlinecourses.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portfolio Link: https://mtsonlinecourses.com"
              >
                <div className={container1PortfolioItemsItemImage}>
                  <picture>
                    <img src={!windowObjectExists ? 'mts/static/portfolio-1.jpg' : PortfolioOne} alt="portfolio one" />
                  </picture>
                </div>
                <div className={container1PortfolioItemsItemCaption}>
                  <h4>Online Courses</h4>
                  <p>My in-depth content ...</p>
                </div>
              </a>
            </li>
            <li className={container1PortfolioItemsItem}>
              <a
                href="https://www.github.com/mts"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portfolio Link: https://www.github.com/mts"
              >
                <div className={container1PortfolioItemsItemImage}>
                  <picture>
                    <img src={!windowObjectExists ? 'mts/static/portfolio-2.jpg' : PortfolioTwo} alt="portfolio two" />
                  </picture>
                </div>
                <div className={container1PortfolioItemsItemCaption}>
                  <h4>Open Source</h4>
                  <p>My contributions ...</p>
                </div>
              </a>
            </li>
            <li className={container1PortfolioItemsItem}>
              <a href="/blog" target="_blank" rel="noopener noreferrer" aria-label="Portfolio Link: /blog">
                <div className={container1PortfolioItemsItemImage}>
                  <picture>
                    <img src={!windowObjectExists ? 'mts/static/portfolio-3.jpg' : PortfolioThree} alt="portfolio three" />
                  </picture>
                </div>
                <div className={container1PortfolioItemsItemCaption}>
                  <h4>Tutorials</h4>
                  <p>My free content ...</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className={container1Timeline}>
          <div className={container1TimelineSectionHeader}>
            <h2 className={container1TimelineSectionHeaderH2}>TIMELINE</h2>
            <h3 className={container1TimelineSectionHeaderH3}>MY PROFESSIONAL STORY.</h3>
          </div>
          <ul className={container1TimelineItems}>
            <li className={container1TimelineItemsItem}>
              <div className={container1TimelineItemsItemMemoryImage}>
                <div className={container1TimelineItemsItemMemoryImageContainer}>
                  <div style={{ width: '100%', paddingBottom: '100%' }} />
                  <picture>
                    <img src={!windowObjectExists ? 'mts/static/timeline-1.jpg' : TimelineOne} alt="timeline one" />
                  </picture>
                </div>
              </div>
              <div className={container1TimelineItemsItemCaption}>
                <h4>1993 - 1997</h4>
                <h4>Bachelor of Science</h4>
                <div>
                  <p>
                    I graduated with a bachelor of science in computer science. Lots of this knowledge can be applied for more complex
                    problems in client-server architectures.
                  </p>
                </div>
              </div>
            </li>
            <li className={container1TimelineItemsItem}>
              <div className={container1TimelineItemsItemMemoryImage}>
                <div className={container1TimelineItemsItemMemoryImageContainer}>
                  <div style={{ width: '100%', paddingBottom: '100%' }} />
                  <picture>
                    <img src={!windowObjectExists ? 'mts/static/timeline-2.jpg' : TimelineTwo} alt="timeline two" />
                  </picture>
                </div>
              </div>
              <div className={container1TimelineItemsItemCaption}>
                <h4>2010 - 2014</h4>
                <h4>Freelancer</h4>
                <div>
                  <p>I got my hands dirty by writing JavaScript and C# applications for several clients.</p>
                </div>
              </div>
            </li>
            <li className={container1TimelineItemsItem}>
              <div className={container1TimelineItemsItemMemoryImage}>
                <div className={container1TimelineItemsItemMemoryImageContainer}>
                  <div style={{ width: '100%', paddingBottom: '100%' }} />
                  <picture>
                    <img src={!windowObjectExists ? 'mts/static/timeline-3.jpg' : TimelineThree} alt="timeline three" />
                  </picture>
                </div>
              </div>
              <div className={container1TimelineItemsItemCaption}>
                <h4>2014 - 2017</h4>
                <h4>Startups</h4>
                <div>
                  <p>
                    I worked closely with an exceptional team of engineers at a company in Berlin developing large scale applications for
                    thousands of customers.
                  </p>
                </div>
              </div>
            </li>
            <li className={container1TimelineItemsItem}>
              <div className={container1TimelineItemsItemMemoryImage}>
                <div className={container1TimelineItemsItemMemoryImageContainer}>
                  <div style={{ width: '100%', paddingBottom: '100%' }} />
                  <picture>
                    <img src={!windowObjectExists ? 'mts/static/timeline-4.jpg' : TimelineFour} alt="timeline four" />
                  </picture>
                </div>
              </div>
              <div className={container1TimelineItemsItemCaption}>
                <h4>2016</h4>
                <h4>Yellow Book</h4>
                <div>
                  <p>
                    This year I published my first book about Yellow.js. Within the first month it had more than 10.000 readers and today it
                    is one of the most popular React.js books.
                  </p>
                </div>
              </div>
            </li>
            <li className={container1TimelineItemsItem}>
              <div className={container1TimelineItemsItemMemoryImage}>
                <div className={container1TimelineItemsItemMemoryImageContainer}>
                  <div style={{ width: '100%', paddingBottom: '100%' }} />
                  <picture>
                    <img src={!windowObjectExists ? 'mts/static/timeline-5.jpg' : TimelineFive} alt="timeline five" />
                  </picture>
                </div>
              </div>
              <div className={container1TimelineItemsItemCaption}>
                <h4>2017</h4>
                <h4>Gray Book</h4>
                <div>
                  <p>
                    I published my second book about state management with Gray in Yellow.js which I took one level further by packaging it
                    as a full-blown online course.
                  </p>
                </div>
              </div>
            </li>
            <li className={container1TimelineItemsItem}>
              <div className={container1TimelineItemsItemMemoryImage}>
                <div className={container1TimelineItemsItemMemoryImageContainer}>
                  <div style={{ width: '100%', paddingBottom: '100%' }} />
                  <picture>
                    <img src={!windowObjectExists ? 'mts/static/timeline-6.jpg' : TimelineSix} alt="timeline six" />
                  </picture>
                </div>
              </div>
              <div className={container1TimelineItemsItemCaption}>
                <h4>2018</h4>
                <h4>Pink Book</h4>
                <div>
                  <p>
                    As an early adopter of Pink in my recent jobs, I wrote my third book about it for modern client-server applications
                    using Pink in JavaScript.
                  </p>
                </div>
              </div>
            </li>
            <li className={container1TimelineItemsItem}>
              <div className={container1TimelineItemsItemMemoryImage}>
                <div className={container1TimelineItemsItemMemoryImageContainer}>
                  <div style={{ width: '100%', paddingBottom: '100%' }} />
                  <picture>
                    <img src={!windowObjectExists ? 'mts/static/timeline-7.jpg' : TimelineSeven} alt="timeline seven" />
                  </picture>
                </div>
              </div>
              <div className={container1TimelineItemsItemCaption}>
                <h4>2018</h4>
                <h4>Developer Magazines</h4>
                <div>
                  <p>Every other month I write for a software developer magazine educational content about JavaScript and its ecosystem.</p>
                </div>
              </div>
            </li>
            <li className={container1TimelineItemsItem}>
              <div className={container1TimelineItemsItemMemoryImage}>
                <div className={container1TimelineItemsItemMemoryImageContainer}>
                  <div style={{ width: '100%', paddingBottom: '100%' }} />
                  <picture>
                    <img src={!windowObjectExists ? 'mts/static/timeline-8.jpg' : TimelineEight} alt="timeline eight" />
                  </picture>
                </div>
              </div>
              <div className={container1TimelineItemsItemCaption}>
                <h4>2018</h4>
                <h4>Orange Book</h4>
                <div>
                  <p>
                    Later this year, I published my fourth book/course about Firebase in React to build modern frontend applications without
                    worrying about your backend application.
                  </p>
                </div>
              </div>
            </li>
            <li className={container1TimelineItemsItem}>
              <div className={container1TimelineItemsItemMemoryImage}>
                <div className={container1TimelineItemsItemMemoryImageContainer}>
                  <div style={{ width: '100%', paddingBottom: '100%' }} />
                  <picture>
                    <img src={!windowObjectExists ? 'mts/static/timeline-9.jpg' : TimelineNine} alt="timeline nine" />
                  </picture>
                </div>
              </div>
              <div className={container1TimelineItemsItemCaption}>
                <h4>2017 - TODAY</h4>
                <h4>Self-Employed</h4>
                <div>
                  <p>
                    Lots of demand for JavaScript on-site or remote training, implementations for MVPs, code reviews, or complex JavaScript
                    problem solving, led me to being self-employed.
                  </p>
                </div>
              </div>
            </li>
            <li className={container1TimelineItemsItem}>
              <div className={container1TimelineItemsItemMemoryImage}>
                <div className={container1TimelineItemsItemMemoryImageContainer}>
                  <div className={container1TimelineItemsItemNewestMemory}>
                    <h4>Be part of my story.</h4>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className={container1Test}>
          <div className={container1TestSectionHeader}>
            <h2 className={container1TestSectionHeaderH2}>Testimonials</h2>
            <h3 className={container1TestSectionHeaderH3}>What industry leaders are saying</h3>
          </div>
          <ul className={container1TestItems}>
            <li className={container1TestItemsItem}>
              <a
                href="https://twitter.com/martinlawrence"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Customer Testimonial Link: https://twitter.com/martinlawrence"
              >
                <div className={container1TestItemsItemImage}>
                  <div className={container1TestItemsItemImageContainer}>
                    <div style={{ width: '100%', paddingBottom: '100%' }} />
                    <picture>
                      <img src={!windowObjectExists ? 'mts/static/testimonial-1.jpg' : TestimonialOne} alt="test one" />
                    </picture>
                  </div>
                </div>
              </a>
              <div className={container1TestItemsItemCaption}>
                <h4>Martin Lawrence</h4>
                <p className={container1TestItemsItemCaptionP1}>Developer Experience at Bad Boys</p>
                <p className={container1TestItemsItemCaptionP2}>
                  MTS is one of the most consistently high quality React educators. His approach directly addresses practical concerns you
                  *will* face in your daily React work, without talking down to you or wasting your time with fluff. Don’t just take my word
                  for it - look at his public work and you’ll see.
                </p>
              </div>
            </li>
            <li className={container1TestItemsItem}>
              <a
                href="https://twitter.com/mariahcarey"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Customer Testimonial Link: https://twitter.com/mariahcarey"
              >
                <div className={container1TestItemsItemImage}>
                  <div className={container1TestItemsItemImageContainer}>
                    <div style={{ width: '100%', paddingBottom: '100%' }} />
                    <picture>
                      <img src={!windowObjectExists ? 'mts/static/testimonial-2.jpg' : TestimonialTwo} alt="test two" />
                    </picture>
                  </div>
                </div>
              </a>
              <div className={container1TestItemsItemCaption}>
                <h4>Mariah Carey</h4>
                <p className={container1TestItemsItemCaptionP1}>JS Dev, Online Educator</p>
                <p className={container1TestItemsItemCaptionP2}>
                  MTS is an excellent teacher. His articles and tutorials are in-depth and informative, and his code is clear and concise.
                  I&apos;ve found an answer on his site countless times when researching a problem, and I know that&apos;s one less article
                  I have to write.
                </p>
              </div>
            </li>
            <li className={container1TestItemsItem}>
              <a
                href="https://twitter.com/brucewillis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Customer Testimonial Link: https://twitter.com/brucewillis"
              >
                <div className={container1TestItemsItemImage}>
                  <div className={container1TestItemsItemImageContainer}>
                    <div style={{ width: '100%', paddingBottom: '100%' }} />
                    <picture>
                      <img src={!windowObjectExists ? 'mts/static/testimonial-3.jpg' : TestimonialThree} alt="test two" />
                    </picture>
                  </div>
                </div>
              </a>
              <div className={container1TestItemsItemCaption}>
                <h4>Bruce Willis</h4>
                <p className={container1TestItemsItemCaptionP1}>Full-time JavaScript Instructor</p>
                <p className={container1TestItemsItemCaptionP2}>
                  Everything that I&apos;ve read from MTS has been top tier quality stuff. There are blog posts that I have wanted to write,
                  but then I found one by MTS and decided I didn&apos;t need to. Fantastic content
                </p>
              </div>
            </li>
            <li className={container1TestItemsItem}>
              <a
                href="https://twitter.com/geoffreyrush"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Customer Testimonial Link: https://twitter.com/geoffreyrush"
              >
                <div className={container1TestItemsItemImage}>
                  <div className={container1TestItemsItemImageContainer}>
                    <div style={{ width: '100%', paddingBottom: '100%' }} />
                    <picture>
                      <img src={!windowObjectExists ? 'mts/static/testimonial-4.jpg' : TestimonialFour} alt="test four" />
                    </picture>
                  </div>
                </div>
              </a>
              <div className={container1TestItemsItemCaption}>
                <h4>Geoffrey Rush</h4>
                <p className={container1TestItemsItemCaptionP1}>JS Dev, Organizer of Pirates of the Caribbean</p>
                <p className={container1TestItemsItemCaptionP2}>
                  You can tell how much time MTS has put into a teaching piece when you consume his content. I have partnered with MTS and
                  he sets the bar high for other teachers and content creators – this results to a quality learning ecosystem for his
                  students regardless if a content or course was thought by him or not.
                </p>
              </div>
            </li>
            <li className={container1TestItemsItem}>
              <a
                href="https://twitter.com/rayliotta"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Customer Testimonial Link: https://twitter.com/rayliotta"
              >
                <div className={container1TestItemsItemImage}>
                  <div className={container1TestItemsItemImageContainer}>
                    <div style={{ width: '100%', paddingBottom: '100%' }} />
                    <picture>
                      <img src={!windowObjectExists ? 'mts/static/testimonial-5.jpg' : TestimonialFive} alt="test five" />
                    </picture>
                  </div>
                </div>
              </a>
              <div className={container1TestItemsItemCaption}>
                <h4>Ray Liotta</h4>
                <p className={container1TestItemsItemCaptionP1}>Goodfellas Core Team</p>
                <p className={container1TestItemsItemCaptionP2}>
                  I haven&apos;t read this book yet, but the previous educational materials made by MTS were nothing short of amazing.
                  Thanks for creating this content and putting it out there!
                </p>
              </div>
            </li>
            <li className={container1TestItemsItem}>
              <a
                href="https://twitter.com/lorrainebracco"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Customer Testimonial Link: https://twitter.com/lorrainebracco"
              >
                <div className={container1TestItemsItemImage}>
                  <div className={container1TestItemsItemImageContainer}>
                    <div style={{ width: '100%', paddingBottom: '100%' }} />
                    <picture>
                      <img src={!windowObjectExists ? 'mts/static/testimonial-6.jpg' : TestimonialSix} alt="test six" />
                    </picture>
                  </div>
                </div>
              </a>
              <div className={container1TestItemsItemCaption}>
                <h4>Lorraine Bracco</h4>
                <p className={container1TestItemsItemCaptionP1}>Founder & CEO of Goodfellas</p>
                <p className={container1TestItemsItemCaptionP2}>
                  If it&apos;s anything to do with React and it&apos;s written by MTS, you can trust that it&apos;ll be world-class. His
                  books are some of the best content you&apos;ll find on the web for learning React.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

HomeMain.defaultProps = homeMainDefaultProps

HomeMain.propTypes = homeMainPropTypes
