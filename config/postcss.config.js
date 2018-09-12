/* eslint-env node */
const precss = require('precss')
const postcssPresetEnv = require('postcss-preset-env')
const autoPrefixer = require('autoprefixer')

module.exports = {
  plugins: [
    precss,
    autoPrefixer,
    postcssPresetEnv({
      browsers: 'last 2 versions',
    }),
  ],
}
