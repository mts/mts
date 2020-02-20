import React from 'react'
import cx from 'classnames'
import {
  content,
  contentCourse,
  contentCourseContainer,
  contentCourseContainerRoadmap,
  contentCourseContainerRoadmapDescription,
} from './CoursesContent.scss'
import { LoremIpsum } from '../../atom/LoremIpsum'
import { coursesContentDefaultProps, coursesContentPropTypes } from './CoursesContent.prop'
import { size } from '../../../../../library/src/client/placeholder'

export function CoursesContent({ className }) {
  return (
    <div className={cx(className, content)}>
      <div className={contentCourse}>
        <div className={contentCourseContainer}>
          <div className={contentCourseContainerRoadmap}>
            <h1>Lorem ipsum dolor sit amet</h1>
            <h3 className={contentCourseContainerRoadmapDescription}>
              <LoremIpsum length={size.x1Small} count={1} />
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

CoursesContent.defaultProps = coursesContentDefaultProps

CoursesContent.propTypes = coursesContentPropTypes
