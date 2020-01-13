require('babel-core')
require('babel-polyfill')
// eslint-disable-next-line no-global-assign
require = require('esm')(module/* , options */)
// module.exports = require('./lib/kafka-publisher') // es6

const server = require('./src/index')

server.init()