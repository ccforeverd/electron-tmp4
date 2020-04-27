const path = require('path')
const config = require('../tsconfig.json')

const { paths } = config.compilerOptions
const resolve = dir => path.resolve(__dirname, '../', dir)

module.exports = Object.keys(paths).reduce((result, key, value) => {
  if (key !== '*') {
    value = paths[key].toString().replace('/*', '')
    key = key.replace('/*', '')
    result[key] = resolve(value)
  }
  return result
}, {
  // react: resolve('node_modules/react')
})