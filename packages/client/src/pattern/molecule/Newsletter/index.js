import React from 'react'
import cx from 'classnames'
import {
  topBorder,
  label,
  labelSectionHeader,
  labelSectionHeaderH2,
  labelSectionHeaderH3,
  labelLead,
  labelForm,
  labelFormInput,
  labelFormButton,
} from './Newsletter.scss'
import { LabelLeadSvg } from './Newsletter.part'
import { newsletterDefaultProps, newsletterPropTypes } from './Newsletter.prop'

export function Newsletter({ className }) {
  return (
    <div className={cx(className, topBorder)}>
      <label htmlFor="newsletter" className={label}>
        <div className={labelSectionHeader}>
          <h2 className={labelSectionHeaderH2}>Take Part</h2>
          <h3 className={labelSectionHeaderH3}>Never miss an article about web development and JavaScript.</h3>
        </div>
        <p className={labelLead}>
          <LabelLeadSvg />
          Join 0+ Developers
        </p>
        <p className={labelLead}>
          <LabelLeadSvg />
          Learn Web Development with JavaScript
        </p>
        <p className={labelLead}>
          <LabelLeadSvg />
          Tips and Tricks
        </p>
        <p className={labelLead}>
          <LabelLeadSvg />
          Access Tutorials, eBooks and Courses
        </p>
        <p className={labelLead}>
          <LabelLeadSvg />
          Personal Development as a Software Engineer
        </p>
        <div style={{ marginBottom: '20px' }} />
        <form className={labelForm}>
          <input type="email" className={labelFormInput} id="newsletter" autoComplete="email" placeholder="Your email address" />
          <button className={labelFormButton} type="submit">
            Subscribe
          </button>
        </form>
        <small>
          <small>
            View our&nbsp;
            <a itemProp="url" href="/legal">
              Privacy Policy
            </a>
            .
          </small>
        </small>
      </label>
    </div>
  )
}

Newsletter.defaultProps = newsletterDefaultProps

Newsletter.propTypes = newsletterPropTypes
