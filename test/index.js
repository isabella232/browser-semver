const t = require('tap')
const semver =  require('../src/')
const {SEMVER_SPEC_VERSION} =  require('../src/internal/constants')

t.match(Object.getOwnPropertyDescriptor(semver, 'SEMVER_SPEC_VERSION'), {
  get: undefined,
  set: undefined,
  value: SEMVER_SPEC_VERSION,
  configurable: true,
  enumerable: true
}, 'just a normal value property')
