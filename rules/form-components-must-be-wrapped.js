'use strict'

const Rule = require('ember-template-lint').Rule

module.exports = class FormComponentsMustBeWrapped extends Rule {
  INVALID_TAG_NAMES = [
    'ui-text-field',
    'UiTextField',
    'ui-address-autocomplete',
    'UiAddressAutocomplete',
    'ui-checkbox-standalone',
    'UiCheckboxStandalone',
    'ui-checkbox',
    'UiCheckbox',
    'ui-date-time-picker',
    'UiDateTimePicker',
    'ui-radio-group',
    'UiRadioGroup',
    'ui-select',
    'UiSelect',
    'ui-signature-pad',
    'UiSignaturePad',
    'ui-text-area',
    'UiTextArea',
    'ui-toggle',
    'UiToggle'
  ]

  visitor() {
    return {
      MustacheStatement(node) {
        this.checkTagName(node, node.path.original)
      },
      BlockStatement(node) {
        this.checkTagName(node, node.path.original)
      },
      ElementNode(node) {
        this.checkTagName(node, node.tag)
      }
    }
  }

  checkTagName(node, name) {
    if (this.INVALID_TAG_NAMES.includes(name)) {
      // console.log(node)
      this.log({
        message: `
          You've attempted to use the ${name} form component which has not been wrapped in a {{ui-form}} or {{ui-form-fields-for}} tag.

          Form components should be called like this (example):
            {{#ui-form object=this.changesetOrObject onSubmit=(action "submit") as |f|}}
              {{f.ui-checkbox-standalone name="propertyOnChangesetOrObject" label="This is a label"}}
            {{/ui-form}}

          And NOT like this (example):
            {{ui-checkbox-standalone value=this.value label="This is a label"}}

          Reach out to #pod-fe for further details.`,
        line: node.loc && node.loc.start.line,
        column: node.loc && node.loc.start.column,
        source: this.sourceForNode(node),
        node
      })
    }
  }
}
