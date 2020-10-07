module.exports = {
 parser: 'babel-eslint',
 env: {
  es6: true,
  browser: true,
  node: true,
 },
 rules: {
  semi: 'off',
  indent: ['error', 1],
  'linebreak-style': 'off',
  'quote-props': 'off',
  'object-curly-spacing': 'off',
  'require-jsdoc': 'off',
 },
 extends: ['eslint:recommended', 'google'],
}
