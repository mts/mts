/* eslint global-require: 0 */

require('@babel/register')({
  extensions: ['.js', '.jsx'],
  ignore: [],
})

if (typeof window === 'undefined') {
  require('./serverApp')
} else {
  require('./clientApp')
}
