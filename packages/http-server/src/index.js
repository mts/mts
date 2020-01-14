/* eslint global-require: 0 */

require('@babel/register')({
  extensions: ['.js', '.jsx'],
})

require('./server')
