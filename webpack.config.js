module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill','./client/index.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: [/\.jsx?$/ , /\.(sass|less|css)$/] ,
        exclude: /node_modules/,
        loader:  'babel-loader',
        options: {
          presets: [
            '@babel/preset-react'
          ]
        }
      }
    ]
  }
}
