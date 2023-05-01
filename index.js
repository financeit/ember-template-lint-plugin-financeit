'use strict'

import whitelistAttributesForUiComponents from './rules/whitelist-attributes-for-ui-components'
import formComponentsMustBeWrapped from './rules/form-components-must-be-wrapped'
import uiFormFieldValueMustSupplyOnValueChange from './rules/ui-form-field-value-must-supply-on-value-change'

export default {
  name: 'financeit',

  rules: {
    'whitelist-attributes-for-ui-components': whitelistAttributesForUiComponents,
    'form-components-must-be-wrapped': formComponentsMustBeWrapped,
    'ui-form-field-value-must-supply-on-value-change': uiFormFieldValueMustSupplyOnValueChange
  }
}
