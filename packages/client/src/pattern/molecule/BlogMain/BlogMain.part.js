import React from 'react'
import cx from 'classnames'
import {
  h2PropTypes,
  blogItemFeaturedDefaultProps,
  blogItemFeaturedPropTypes,
  blogItemRegularDefaultProps,
  blogItemRegularPropTypes,
} from './BlogMain.prop'
import {
  containerBlogItem,
  containerBlogItemFeatured,
  containerBlogItemImage,
  containerBlogItemImageFeatured,
  containerBlogItemContent,
  containerBlogItemContentFeatured,
  containerBlogListContainer,
  containerBlogListContainerImage,
  containerBlogListContainerContent,
} from './BlogMain.scss'
import { windowObjectExists } from '../../../../../library/src/environment'
import { LoremIpsum } from '../../atom/LoremIpsum'
import { Image } from '../../atom/Image'
import { element } from '../../../../../library/src/client/dom'
import { size } from '../../../../../library/src/client/placeholder'

export function H2({ prefix, href, text }) {
  return (
    <h2>
      {prefix ? <span>{prefix}&nbsp;</span> : null}
      <a itemProp="url" href={href}>
        <span>
          {text}
          <svg viewBox="0 0 185.343 185.343" height="16px" width="16px">
            <path
              d="M51.707 185.343a10.692 10.692 0 0 1-7.593-3.149 10.724 10.724 0 0 1 0-15.175l74.352-74.347L44.114 18.32c-4.194-4.194-4.194-10.987 0-15.175 4.194-4.194 10.987-4.194 15.18 0l81.934 81.934c4.194 4.194 4.194 10.987 0 15.175l-81.934 81.939a10.678 10.678 0 0 1-7.587 3.15z"
              fill="#823eb7"
            />
          </svg>
        </span>
      </a>
    </h2>
  )
}

H2.propTypes = h2PropTypes

export function BlogItemFeatured({ imageName, image, href, title, text }) {
  const imgSrc = !windowObjectExists ? `mts/static/${imageName}.jpg` : image

  return (
    <article className={cx(containerBlogItem, containerBlogItemFeatured)}>
      <Image
        className={cx(containerBlogItemImage, containerBlogItemImageFeatured)}
        divStyle={{ width: '100%', paddingBottom: '64.94140625%' }}
        srcSet={`${imgSrc} 125w, ${imgSrc} 250w, ${imgSrc} 500w, ${imgSrc} 750w, ${imgSrc} 1000w, ${imgSrc} 1024w`}
        sizes="(max-width: 500px) 100vw, 500px"
        src={imgSrc}
        alt={imageName}
        loading="lazy"
      />
      <div className={cx(containerBlogItemContent, containerBlogItemContentFeatured)}>
        <header>
          <h2 itemProp="name headline">
            <a itemProp="url" aria-label="Go To Blog Post" href={href}>
              {title}
            </a>
          </h2>
        </header>
        {text || <LoremIpsum container={element.paragraph} length={size.small} count={1} />}
      </div>
    </article>
  )
}

BlogItemFeatured.defaultProps = blogItemFeaturedDefaultProps
BlogItemFeatured.propTypes = blogItemFeaturedPropTypes

export function BlogItemRegular({ imageName, image, href, title, text }) {
  const imgSrc = !windowObjectExists ? `mts/static/${imageName}.jpg` : image

  return (
    <article className={containerBlogListContainer}>
      <div className={containerBlogListContainerImage}>
        <div style={{ width: '100%', paddingBottom: '6.69921875%' }} />
        <picture>
          <source
            srcSet={`${imgSrc} 125w, ${imgSrc} 250w, ${imgSrc} 500w, ${imgSrc} 750w, ${imgSrc} 1000w, ${imgSrc} 1024w`}
            sizes="(max-width: 500px) 100vw, 500px"
          />
          <img
            sizes="(max-width: 500px) 100vw, 500px"
            srcSet={`${imgSrc} 125w, ${imgSrc} 250w, ${imgSrc} 500w, ${imgSrc} 750w, ${imgSrc} 1000w, ${imgSrc} 1024w`}
            src={imgSrc}
            alt={imageName}
            loading="lazy"
          />
        </picture>
      </div>
      <div className={containerBlogListContainerContent}>
        <header>
          <h2 itemProp="name headline">
            <a itemProp="url" aria-label="Go To Blog Post" href={href}>
              {title}
            </a>
          </h2>
        </header>
        {text || <LoremIpsum container={element.paragraph} length={size.small} count={1} />}
      </div>
    </article>
  )
}

BlogItemRegular.defaultProps = blogItemRegularDefaultProps
BlogItemRegular.propTypes = blogItemRegularPropTypes
