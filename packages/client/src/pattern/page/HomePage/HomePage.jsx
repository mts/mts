import React from 'react'
import { homePageDefaultProps, homePagePropTypes } from './HomePage.props'

export function HomePage({ className }) {
  return <div className={className}>HomePage server side rendered!!!</div>
}

HomePage.defaultProps = homePageDefaultProps

HomePage.propTypes = homePagePropTypes

// Default export is required to use with React.lazy()
export default HomePage
