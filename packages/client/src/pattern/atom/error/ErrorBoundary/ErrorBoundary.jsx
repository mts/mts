/* eslint-disable no-unused-vars */
import React from 'react'
import { errorBoundaryPropTypes } from './ErrorBoundary.props'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }

    return children
  }
}

ErrorBoundary.propTypes = errorBoundaryPropTypes
/* eslint-enable no-unused-vars */
