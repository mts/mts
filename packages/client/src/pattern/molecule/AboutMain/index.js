import React, { useEffect } from 'react'
import { container1 } from './AboutMain.scss'
import { aboutMainDefaultProps, aboutMainPropTypes } from './AboutMain.props'
import { handleStickyNavBar } from '../../../../../library/src/client/navBar'

export function AboutMain({ className }) {
  useEffect(() => {
    handleStickyNavBar()
  })

  return (
    <main className={className} style={{ marginTop: '55', display: 'flex', justifyContent: 'center' }}>
      <section className={container1}>AboutMain under construction</section>
    </main>
  )
}

AboutMain.defaultProps = aboutMainDefaultProps

AboutMain.propTypes = aboutMainPropTypes
