# ember-template-lint-plugin-financeit

This repo contains a set of shareable rules and configuration for used for template linting among our various projects (Tag, Financeit, Centah, etc...)

### Installation

In your project root: `yarn add git+ssh://git@github.com:financeit/ember-template-lint-plugin-financeit.git --dev`

Then inside of your newly generated `/.template-lintrc.js`:

```js
module.exports = {
  plugins: ['ember-template-lint-plugin-financeit'],
  rules: {
    'whitelist-attributes-for-ui-components': true
  },
};
```
