/* eslint-env node */
'use strict'

module.exports = {
  name: 'financeit',

  rules: {
    'whitelist-attributes-for-ui-components': require('./rules/whitelist-attributes-for-ui-components'),
    'form-components-must-be-wrapped': require('./rules/form-components-must-be-wrapped'),
    'ui-form-field-value-must-supply-on-value-change': require('./rules/ui-form-field-value-must-supply-on-value-change'),
  }
}
