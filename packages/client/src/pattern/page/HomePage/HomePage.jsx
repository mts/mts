import React from 'react'
import { UnderConstruction } from '../../atom/info/UnderConstruction'
import { homePageDefaultProps, homePagePropTypes } from './HomePage.props'

export function HomePage({ className }) {
  return <UnderConstruction className={className} />
}

HomePage.defaultProps = homePageDefaultProps

HomePage.propTypes = homePagePropTypes

// Default export is required to use with React.lazy()
export default HomePage
