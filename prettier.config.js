// prettier.config.js or .prettierrc.js
module.exports = {
  printWidth: 100,
  parser: 'flow',
  semi: false,
  singleQuote: true,
  overrides: [
    {
      files: '*.scss',
      options: {
        singleQuote: false
      }
    }
  ]
}
