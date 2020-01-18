/* eslint global-require: 0 */

require('ignore-styles')

require('@babel/register')({
  ignore: [/(node_modules)/],
  extensions: ['.js', '.jsx'],
})

require('./server')
