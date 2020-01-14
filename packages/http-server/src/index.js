/* eslint global-require: 0 */

if (process.env.DEV_ENV === 'true') {
  require('@babel/register')({
    extensions: ['.js', '.jsx'],
  })

  require('./server')
} else {
  require('../build/server')
}
