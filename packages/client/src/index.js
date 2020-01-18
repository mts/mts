/* eslint global-require: 0 */

import './index.scss'

require('@babel/register')({
  extensions: ['.js', '.jsx'],
  ignore: [],
})

if (typeof window === 'undefined') {
  require('./serverApp')
} else {
  require('./clientApp')
}
