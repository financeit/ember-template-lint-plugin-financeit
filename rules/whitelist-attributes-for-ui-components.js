'use strict'

import { Rule } from 'ember-template-lint'

export default class WhitelistAriaDataAndIdAttributes extends Rule {
  regex = new RegExp('(^data-.+)|(^aria-.+)|id|(^@.+)')

  ERROR_MESSAGE = 'Financeit Ui* components should only have data-*, aria-*, or id attributes'

  visitor() {
    return {
      ElementNode(node) {
        // check if this is a Financeit Ui* component
        if (!node.tag.startsWith('Ui')) return

        let attrNames = node.attributes.filter(attr => attr.type === 'AttrNode').map(attr => attr.name)

        if (!attrNames.every(name => this.regex.test(name))) {
          this.log({
            message: this.ERROR_MESSAGE,
            line: node.loc && node.loc.start.line,
            column: node.loc && node.loc.start.column,
            source: this.sourceForNode(node),
            node
          })
        }
      }
    }
  }
}
