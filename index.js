'use strict'

import whitelistAttributesForUiComponents from './rules/whitelist-attributes-for-ui-components.js'
import formComponentsMustBeWrapped from './rules/form-components-must-be-wrapped.js'
import uiFormFieldValueMustSupplyOnValueChange from './rules/ui-form-field-value-must-supply-on-value-change.js'

export default {
  name: 'financeit',

  rules: {
    'whitelist-attributes-for-ui-components': whitelistAttributesForUiComponents,
    'form-components-must-be-wrapped': formComponentsMustBeWrapped,
    'ui-form-field-value-must-supply-on-value-change': uiFormFieldValueMustSupplyOnValueChange
  }
}
