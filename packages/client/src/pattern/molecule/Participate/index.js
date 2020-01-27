import React from 'react'
import cx from 'classnames'
import {
  part,
  partLabel,
  partLabelHeader,
  partLabelHeaderSecondary,
  partLabelHeaderTertiary,
  partLabelLead,
  partLabelForm,
  partLabelFormInput,
  partLabelFormButton,
} from './Participate.scss'
import { participateDefaultProps, participatePropTypes } from './Participate.props'

export function Participate({ className }) {
  return (
    <div className={cx(className, part)}>
      <label htmlFor="newsletter" className={partLabel}>
        <div className={partLabelHeader}>
          <h2 className={partLabelHeaderSecondary}>Take Part</h2>
          <h3 className={partLabelHeaderTertiary}>Never miss an article about web development and JavaScript.</h3>
        </div>
        <p className={partLabelLead}>
          <svg width="20px" height="20px" viewBox="0 0 123.811 123.811">
            <path d="M29.85 106.463c3.2 3.2 7.5 5 12 5s8.8-1.8 12-5l64.799-64.8c6.5-6.5 7-17.2.7-23.9-6.6-7.1-17.7-7.2-24.399-.4l-46 46c-3.9 3.9-10.2 3.9-14.1 0l-5.9-6c-6.6-6.6-17.4-6.6-24 0-6.6 6.601-6.6 17.4 0 24l24.9 25.1z" />
          </svg>
          Join 0+ Developers
        </p>
        <p className={partLabelLead}>
          <svg width="20px" height="20px" viewBox="0 0 123.811 123.811">
            <path d="M29.85 106.463c3.2 3.2 7.5 5 12 5s8.8-1.8 12-5l64.799-64.8c6.5-6.5 7-17.2.7-23.9-6.6-7.1-17.7-7.2-24.399-.4l-46 46c-3.9 3.9-10.2 3.9-14.1 0l-5.9-6c-6.6-6.6-17.4-6.6-24 0-6.6 6.601-6.6 17.4 0 24l24.9 25.1z" />
          </svg>
          Learn Web Development with JavaScript
        </p>
        <p className={partLabelLead}>
          <svg width="20px" height="20px" viewBox="0 0 123.811 123.811">
            <path d="M29.85 106.463c3.2 3.2 7.5 5 12 5s8.8-1.8 12-5l64.799-64.8c6.5-6.5 7-17.2.7-23.9-6.6-7.1-17.7-7.2-24.399-.4l-46 46c-3.9 3.9-10.2 3.9-14.1 0l-5.9-6c-6.6-6.6-17.4-6.6-24 0-6.6 6.601-6.6 17.4 0 24l24.9 25.1z" />
          </svg>
          Tips and Tricks
        </p>
        <p className={partLabelLead}>
          <svg width="20px" height="20px" viewBox="0 0 123.811 123.811">
            <path d="M29.85 106.463c3.2 3.2 7.5 5 12 5s8.8-1.8 12-5l64.799-64.8c6.5-6.5 7-17.2.7-23.9-6.6-7.1-17.7-7.2-24.399-.4l-46 46c-3.9 3.9-10.2 3.9-14.1 0l-5.9-6c-6.6-6.6-17.4-6.6-24 0-6.6 6.601-6.6 17.4 0 24l24.9 25.1z" />
          </svg>
          Access Tutorials, eBooks and Courses
        </p>
        <p className={partLabelLead}>
          <svg width="20px" height="20px" viewBox="0 0 123.811 123.811">
            <path d="M29.85 106.463c3.2 3.2 7.5 5 12 5s8.8-1.8 12-5l64.799-64.8c6.5-6.5 7-17.2.7-23.9-6.6-7.1-17.7-7.2-24.399-.4l-46 46c-3.9 3.9-10.2 3.9-14.1 0l-5.9-6c-6.6-6.6-17.4-6.6-24 0-6.6 6.601-6.6 17.4 0 24l24.9 25.1z" />
          </svg>
          Personal Development as a Software Engineer
        </p>
        <form className={partLabelForm}>
          <input type="email" className={partLabelFormInput} id="newsletter" autoComplete="email" placeholder="Your email address" />
          <button className={partLabelFormButton} type="submit">
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

Participate.defaultProps = participateDefaultProps

Participate.propTypes = participatePropTypes
