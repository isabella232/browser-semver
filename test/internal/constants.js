const t = require('tap')
const constants =  require('../../src/internal/constants')

t.match(constants, {
  SEMVER_SPEC_VERSION: String,
  MAX_LENGTH: Number,
  MAX_SAFE_INTEGER: Number,
  MAX_SAFE_COMPONENT_LENGTH: Number
}, 'got some numbers exported')
