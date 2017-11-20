/* eslint-env node */
const path = require('path')

module.exports = {
  entry: {
    app: path.resolve('src/js/index')
  },
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.min.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.resolve('src'),
      options: {
        "presets": [
          ["env", { "modules": false }],
          "react",
          "stage-2"
        ],
        "plugins": [
          "react-hot-loader/babel"
        ]
      }

    },{
      test: /(\.css$|\.scss)/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'sass-loader' }
      ]
    }]
  }
}
