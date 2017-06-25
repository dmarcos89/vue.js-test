var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  GOOGLE_KEY: '"AIzaSyCwNZ2cmZt2JtoDMZnePUHHBpVvqQkS4Fw"',
  API_URL: '"http://localhost:3000"',
})
