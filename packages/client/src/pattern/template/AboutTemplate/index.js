import cx from 'classnames'
import { aboutTemplate } from './AboutTemplate.scss'
import { aboutTemplateDefaultProps, aboutTemplatePropTypes } from './AboutTemplate.prop'
import { ShareButtons } from '../../molecule/ShareButtons'
import { Navigation } from '../../molecule/Navigation'
import { AboutMain } from '../../molecule/AboutMain'
import { Book } from '../../molecule/Book'
import { Newsletter } from '../../molecule/Newsletter'
import { Footer } from '../../molecule/Footer'

export function AboutTemplate({ className }) {
  return (
    <div className={cx(className, aboutTemplate)}>
      <ShareButtons />
      <Navigation />
      <AboutMain />
      <Book />
      <Newsletter />
      <Footer />
    </div>
  )
}

AboutTemplate.defaultProps = aboutTemplateDefaultProps

AboutTemplate.propTypes = aboutTemplatePropTypes
