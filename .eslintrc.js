module.exports = {
  root: true,
  env: {
    node: true
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'quote-props': [2, 'consistent', {'keywords': true}],
    'space-before-function-paren': [
      2,
      'never'
    ],
    'vue/no-multi-spaces': 'warning',
    'vue/no-template-shadow': 'warning',
    'vue/no-v-html': 'warning',
    'vue/component-name-in-template-casing': 'warning',
    'vue/no-spaces-around-equal-signs-in-attribute': 'warning',
    'vue/script-indent': 'warning'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
