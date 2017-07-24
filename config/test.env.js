var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  AWS_REGION: 'us-east-1',
  COGNITO_CLIENT_ID: 'xxx',
  COGNITO_IDENTITY_POOL_ID: 'us-west-2:xxxx',
  COGNITO_USER_POOL_ID: 'us-east-1_xxx'
})
