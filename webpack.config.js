const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill','./client/index.js'
  ],
  output: {
    path: path.join(__dirname, "public"),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/ ,
        exclude: /node_modules/,
        loader:  'babel-loader',
        options: {
          presets: [
            '@babel/preset-react'
          ]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
