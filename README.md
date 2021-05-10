# ember-template-lint-plugin-financeit

[Financeit](http://financeit.io) shareable [ember-template-lint](https://github.com/ember-template-lint/ember-template-lint) plugin

### Installation

In your `./package.json`, under `devDependencies`, add the following:
```
  "ember-template-lint-plugin-financeit": "git+ssh://git@github.com:financeit/ember-tempalte-lint-plugin-financeit.git#master
```

Then inside of your newly generated `/.template-lintrc.js`:

```js
module.exports = {
  plugins: ['ember-template-lint-plugin-financeit'],
  extends: 'financeit:recommended'
};
```
