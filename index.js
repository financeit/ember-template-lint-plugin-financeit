/* eslint-env node */
'use strict'

module.exports = {
  name: 'financeit',

  rules: {
    'whitelist-attributes-for-ui-components': require('./rules/whitelist-attributes-for-ui-components')
  }
}
