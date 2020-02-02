import React from 'react'
import { AboutTemplate } from '../../template/AboutTemplate'
import { aboutPageDefaultProps, aboutPagePropTypes } from './AboutPage.props'

export function AboutPage({ className }) {
  return (
    <div className={className}>
      <AboutTemplate />
    </div>
  )
}

AboutPage.defaultProps = aboutPageDefaultProps

AboutPage.propTypes = aboutPagePropTypes

// Default export is required to use with React.lazy()
export default AboutPage
