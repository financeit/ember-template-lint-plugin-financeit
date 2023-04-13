'use strict'

const Rule = require('ember-template-lint').Rule

module.exports = class UiFormFieldValueMustSupplyOnValueChange extends Rule {
  tagNamesToCheck = new Set([
    'ui-text-field',
    'UiTextField',
    'ui-checkbox-standalone',
    'UiCheckboxStandalone',
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
    'ui-segmented-control',
    'UiSegmentedControl',
    'ui-toggle',
    'UiToggle',
  ])

  valueAttributeNames = new Set(['value', '@value'])
  onValueChangeAttributeNames = new Set(['onValueChange', '@onValueChange'])

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
    if (this.tagNamesToCheck.has(name)) {

      if (this.hasValueAttribute(node) && !this.hasOnValueChangeAttribute(node)) {
        this.log({
          message: `
            You've bound a value attribute to the ${name} component, but you haven't bound an onValueChange callback action.
            Because 2-way binding is no longer supported in Ember v4.x, you must define an onValueChange action to handle changes to the value.

            If you want to define a starting value for the component, you can use the initialValue attribute instead of value. For example: 
              <UiTextField @name="firstName" @initialValue="Johnny" />
            `,
          line: node.loc && node.loc.start.line,
          column: node.loc && node.loc.start.column,
          source: this.sourceForNode(node),
          node
        })
      }
    }
  }

  hasValueAttribute(node) {
    return !!node.attributes.find(attribute => this.valueAttributeNames.has(attribute.name))
  }

  hasOnValueChangeAttribute(node) {
    return !!node.attributes.find(attribute => this.onValueChangeAttributeNames.has(attribute.name))
  }
}
