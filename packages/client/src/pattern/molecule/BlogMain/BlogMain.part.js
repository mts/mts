import React from 'react'
import { blogListItemPropTypes } from './BlogMain.props'
import { container1BlogListContainer1, container1BlogListContainer1Image, container1BlogListContainer1Content } from './BlogMain.scss'
import { windowObjectExists } from '../../../../../library/src/environment'
import { LoremIpsum } from '../../atom/placeholder/LoremIpsum'
import { element } from '../../../../../library/src/client/dom'
import { size } from '../../../../../library/src/client/placeholder'

export function BlogListItem({ imageName, image, href, title, intro }) {
  return (
    <article className={container1BlogListContainer1}>
      <div className={container1BlogListContainer1Image}>
        <div style={{ width: '100%', paddingBottom: '6.69921875%' }} />
        <picture>
          <img src={!windowObjectExists ? `mts/static/${imageName}.jpg` : image} alt={imageName} />
        </picture>
      </div>
      <div className={container1BlogListContainer1Content}>
        <header>
          <h2 itemProp="name headline">
            <a itemProp="url" aria-label="Go To Blog Post" href={href}>
              {title}
            </a>
          </h2>
        </header>
        {intro || <LoremIpsum container={element.paragraph} length={size.small} count={1} />}
      </div>
    </article>
  )
}

BlogListItem.propTypes = blogListItemPropTypes
