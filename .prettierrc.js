const path = require('path')

module.exports = {
 arrowParens: 'always',
 bracketSpacing: true,
 endOfLine: 'crlf',
 htmlWhitespaceSensitivity: 'css',
 insertPragma: false,
 jsxBracketSameLine: false,
 jsxSingleQuote: false,
 printWidth: 80,
 proseWrap: 'preserve',
 quoteProps: 'as-needed',
 requirePragma: false,
 semi: false,
 singleQuote: true,
 tabWidth: 1,
 trailingComma: 'es5',
 useTabs: false,
 vueIndentScriptAndStyle: false,
 filepath: path.resolve(__dirname, '.eslintrc'),
 parser: 'babel',
}
