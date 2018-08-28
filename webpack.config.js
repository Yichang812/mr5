const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
      rules: [
          {
            test: /\.js$/,
            exclude: [
              /node_modules/
            ],
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
          },
          {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
          },
          {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader'
              }
            ]
          }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
]
};