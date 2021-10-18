/* eslint-env node */
'use strict'

module.exports = {
  name: 'financeit',

  rules: {
    'whitelist-attributes-for-ui-components': require('./rules/whitelist-attributes-for-ui-components'),
    'form-components-must-be-wrapped': require('./rules/form-components-must-be-wrapped')
  }
}
