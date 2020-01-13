/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { NotFoundTemplate } from '../NotFoundTemplate'
import { notFoundPageData } from '../../../../../../http-server/src/data/page/notFound/index'

const props = {
  data: notFoundPageData,
  location: {
    pathname: 'some-path-name',
  },
}

export const defaultRender = <NotFoundTemplate {...props} />
/* eslint-enable react/jsx-props-no-spreading */
